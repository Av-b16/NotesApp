import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions";

import "./NoteForm.css"

const NoteForm = () => {
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            dispatch(addNote(title, content));
            setTitle("");
            setContent("");
        }
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Write your note..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;
