import React from "react";
import { useNavigate } from "react-router";
import {ReactComponent as NotFoundLogo} from "../assets/undraw_empty_re_opql.svg"

const Note = ({ note, limit }) => {
  const navigate = useNavigate();
  
  return note ? (
    <div
      onClick={() => navigate(`/note/${note.id}`)}
      className="card"
      style={limit ? { cursor: "pointer" } : {}}
    >
      <div className="card-body">
        {limit ? (
          <h6 className="card-title text-muted">{note.title}</h6>
        ) : (
          <h4 className="card-title">{note.title}</h4>
        )}
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">
          {limit ? note.content.slice(0, 110) + " ... ... ..." : note.content}
        </p>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <NotFoundLogo style={{width: '40%', height: '80%'}}/>
    </div>
  );
};

export default Note;
