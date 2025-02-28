import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleSignIn, googleSignOut } from "../redux/actions";  // Import the actions
import { auth } from "../firebase/firebaseConfig"; // Import 'auth' and 'provider' from your Firebase config
import { SET_USER } from "../redux/actions";  // Import the SET_USER action type
import "./authComponent.css"


const AuthComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);  // Getting the user from the Redux store

    const handleSignIn = () => {
        dispatch(googleSignIn());
    };

    const handleSignOut = () => {
        dispatch(googleSignOut());
    };

    useEffect(() => {
        // You can check if a user is already signed in on component mount
        const currentUser = auth.currentUser;
        if (currentUser) {
            dispatch({ type: SET_USER, payload: currentUser });
        }
    }, [dispatch]);

    return (
        <div>
            {user ? (
                <div>
                    <h3>Welcome, {user.displayName}</h3>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <button onClick={handleSignIn}>Sign In with Google</button>
            )}
        </div>
    );
};

export default AuthComponent;
