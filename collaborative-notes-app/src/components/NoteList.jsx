import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, updateNote } from "../redux/actions";
import  "./NoteList.css";

const NotesList = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);

    const handleDelete = (id) => {
        dispatch(deleteNote(id));
    };

    const handleEdit = (id) => {
        const newTitle = prompt("Enter new title:");
        const newContent = prompt("Enter new content:");
        if (newTitle && newContent) {
            dispatch(updateNote(id, { title: newTitle, content: newContent, timestamp: Date.now() }));
        }
    };

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <div key={note.id} className="note">
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <small>{new Date(note.timestamp).toLocaleString()}</small>
                    <button onClick={() => handleEdit(note.id)}>Edit</button>
                    <button onClick={() => handleDelete(note.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default NotesList;
