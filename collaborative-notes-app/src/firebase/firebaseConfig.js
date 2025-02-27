import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIe3AsTWvMDEFP5_P3ZZLuM-shPZ8a0xI",
  authDomain: "collaborative-notes-5b6a8.firebaseapp.com",
  databaseURL: "https://collaborative-notes-5b6a8-default-rtdb.firebaseio.com",
  projectId: "collaborative-notes-5b6a8",
  storageBucket: "collaborative-notes-5b6a8.firebasestorage.app",
  messagingSenderId: "489357039841",
  appId: "1:489357039841:web:5aa12dfbfd11140731ffa0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database, signInWithPopup, signOut, ref, set, push, onValue, remove, update };
