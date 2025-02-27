import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import { database } from "../firebase/firebaseConfig";
import { ref, push, get, update, remove } from "firebase/database";

// Authentication Actions
export const loginUser = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
    dispatch({ type: "LOGIN_SUCCESS", payload: result.user });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  await signOut(auth);
  dispatch({ type: "LOGOUT" });
};

// Notes Actions
export const fetchNotes = () => async (dispatch) => {
  dispatch({ type: "FETCH_NOTES_REQUEST" });
  try {
    const snapshot = await get(ref(database, "notes"));
    const notes = snapshot.val() ? Object.entries(snapshot.val()).map(([id, note]) => ({ id, ...note })) : [];
    dispatch({ type: "FETCH_NOTES_SUCCESS", payload: notes });
  } catch (error) {
    dispatch({ type: "FETCH_NOTES_FAILURE", payload: error.message });
  }
};

export const addNote = (note) => async (dispatch) => {
  const newNoteRef = push(ref(database, "notes"), note);
  dispatch({ type: "ADD_NOTE", payload: { id: newNoteRef.key, ...note } });
};

export const updateNote = (id, updatedContent) => async (dispatch) => {
  await update(ref(database, `notes/${id}`), updatedContent);
  dispatch({ type: "UPDATE_NOTE", payload: { id, ...updatedContent } });
};

export const deleteNote = (id) => async (dispatch) => {
  await remove(ref(database, `notes/${id}`));
  dispatch({ type: "DELETE_NOTE", payload: id });
};
