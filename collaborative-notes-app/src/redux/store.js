import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import notesReducer from "./notesReducer";

const store = createStore(notesReducer, applyMiddleware(thunk));

export default store;
