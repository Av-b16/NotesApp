import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "./redux/actions";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NoteList";
import AuthComponent from "./components/authComponent";  // Import the AuthComponent
import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);  // Get user from Redux state

    useEffect(() => {
        if (user) {
            dispatch(fetchNotes());  // Fetch notes only if the user is logged in
        }
    }, [dispatch, user]);

    return (
        <div className="app">
            <h1>Collaborative Notes App</h1>
            <AuthComponent />  {/* Display authentication controls */}
            
            {user ? (  // Only show notes section if the user is logged in
                <>
                    <NoteForm />
                    <NotesList />
                </>
            ) : (
                <p>Please sign in to add and view notes.</p>  // Display message when not signed in
            )}
        </div>
    );
};

export default App;
