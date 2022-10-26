import React from "react";
import { useNavigate } from "react-router";
import { ReactComponent as NotFoundLogo } from "../assets/undraw_empty_re_opql.svg";

const Note = ({ note, limit }) => {
  const navigate = useNavigate();
  const getDots = (len) => {
    let str = " "
    for (let i = 0; i < 110 - len; i++) {
      str += ".."
    }
    return str
  }

  note.bgColor = "white"
  
  return note ? (
    <div
      onClick={() => navigate(`/note/${note.id}`)}
      className="card shadow-sm"
      style={limit ? { cursor: "pointer", backgroundColor: `${note.bgColor}`, border: '0'} : {backgroundColor: `${note.bgColor}`, border: '0'}}
    >
      <div className="card-body">
        {limit ? (
          <h6 className="card-title">{note.title}</h6>
        ) : (
          <h4 className="card-title">{note.title}</h4>
        )}
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        {limit ? (
          <p className="card-text text-muted">
            {note.content.length > 110 ? note.content.slice(0, 110) + " ... ... ..." : note.content + getDots(note.content.length)}
          </p>
        ) : (
          note.content.split("\n").map(para => <p>{para}</p>)
        )}
      </div>
    </div>
  ) : (
    <div className="text-center">
      <NotFoundLogo style={{ width: "40%", height: "80%" }} />
    </div>
  );
};

export default Note;
