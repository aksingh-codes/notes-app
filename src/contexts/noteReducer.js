import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from "./noteActions";

const noteReducer = (notes, action) => {
  switch (action.type) {
    case CREATE_NOTE: {
      return [...notes, action.payload];
    }

    case UPDATE_NOTE: {
      return notes.map((note) => {
        if (note.id === action.payload.id) return action.payload;
        else return note;
      });
    }

    case DELETE_NOTE: {
      return notes.filter((note) => note.id !== action.payload);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default noteReducer;
