import { useDispatch, useSelector } from "react-redux";
import { deleteNote, fetchNotes } from "../redux/actions";
import { useEffect } from "react";
import './NoteList.css';


const NotesList = () => {
  const dispatch = useDispatch();
  const { notes, loading } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="notes-list">
      {loading ? <p>Loading...</p> : notes.map((note) => (
        <div key={note.id} className="note">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
