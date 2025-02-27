import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "./redux/actions";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NoteList";
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="app">
      {user ? (
        <>
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
          <NoteForm />
          <NotesList />
        </>
      ) : (
        <button onClick={() => dispatch(loginUser())}>Sign in with Google</button>
      )}
    </div>
  );
};

export default App;
