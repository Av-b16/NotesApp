import { SET_USER, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, SET_NOTES } from "./actions";

const initialState = {
  user: null,
    notes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_USER:
          return {
              ...state,
              user: action.payload,
          };
      case SET_NOTES:
          return {
              ...state,
              notes: action.payload,
          };
      case ADD_NOTE:
          return {
              ...state,
              notes: [...state.notes, action.payload],
          };
      case DELETE_NOTE:
          return {
              ...state,
              notes: state.notes.filter((note) => note.id !== action.payload),
          };
      case UPDATE_NOTE:
          return {
              ...state,
              notes: state.notes.map((note) =>
                  note.id === action.payload.id ? action.payload : note
              ),
          };
      default:
          return state;
  }
};

export default rootReducer;
