import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions";
import './NoteForm.css';


const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addNote({ title, content, timestamp: Date.now() }));
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
