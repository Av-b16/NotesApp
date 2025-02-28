import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import { database, ref, push, remove, update, onValue, set } from "../firebase/firebaseConfig";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const SET_NOTES = "SET_NOTES";
export const SET_USER = "SET_USER"; // Add this for user authentication

// Google Sign-In Action
export const googleSignIn = () => (dispatch) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            dispatch({ type: SET_USER, payload: user });
        })
        .catch((error) => {
            console.error("Error during sign-in: ", error);
        });
};

// Sign-Out Action
export const googleSignOut = () => (dispatch) => {
    signOut(auth)
        .then(() => {
            dispatch({ type: SET_USER, payload: null });
        })
        .catch((error) => {
            console.error("Error during sign-out: ", error);
        });
};

// Action Types


// Fetch notes from Firebase
export const fetchNotes = () => (dispatch) => {
    onValue(ref(database, "notes"), (snapshot) => {
        const notesData = snapshot.val() || {};
        const notesArray = Object.keys(notesData).map((key) => ({
            id: key,
            ...notesData[key],
        }));
        dispatch({ type: SET_NOTES, payload: notesArray });
    });
};

// Add a note
export const addNote = (title, content) => () => {
    const noteRef = push(ref(database, "notes"));
    set(noteRef, {
        title,
        content,
        timestamp: Date.now(),
    });
};

// Delete a note
export const deleteNote = (id) => () => {
    remove(ref(database, `notes/${id}`));
};

// Update a note
export const updateNote = (id, updatedNote) => () => {
    update(ref(database, `notes/${id}`), updatedNote);
};
