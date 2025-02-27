import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import notesReducer from "./notesReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
