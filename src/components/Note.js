import React from "react";
import { useNavigate } from "react-router";

const Note = ({ note, limit }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/note/${note.id}`)} className="card" style={limit ? {cursor: "pointer"}: {}}>
      <div className="card-body">
        {
          limit ?
          <h6 className="card-title text-muted">{note.title}</h6> :
          <h4 className="card-title">Title</h4>
        }
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">
          {
            limit ?
            note.content.slice(0,110) + " ... ... ..." :
            note.content
          }
        </p>
      </div>
    </div>
  );
};

export default Note;
