import React, { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import Note from "./Note";
import { ReactComponent as EmptyLogo } from "../assets/undraw_add_notes_re_ln36.svg";

const NotesGallery = () => {
  const notes = useContext(NotesContext);

  return notes && notes.length > 0 ? (
    <div className="notes__gallery">
      {notes.map((note) => (
        <Note key={note.id} note={note} limit />
      ))}
    </div>
  ) : (
    <div style={{textAlign: 'center'}}>
      <EmptyLogo style={{width: '40%'}} />
    </div>
  );
};

export default NotesGallery;
