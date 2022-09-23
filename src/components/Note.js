import React from "react";

const Note = ({ note }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title text-muted">{note.title}</h6>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">
          {note.content.slice(0,110)} ... ... ...
        </p>
      </div>
    </div>
  );
};

export default Note;
