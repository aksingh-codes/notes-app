import React, { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import Note from "./Note";

const NotesGallery = () => {
  const notes = useContext(NotesContext);

  return (
    <div className="notes__gallery">
      {notes && notes.length > 0 ? (
        notes.map((note) => <Note key={note.id} note={note} limit />)
      ) : (
        <div>No Notes found</div>
      )}
    </div>
  );
};

export default NotesGallery;
