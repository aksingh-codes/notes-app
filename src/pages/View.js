import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Note from "../components/Note";
import { NotesContext, NotesDispatchContext } from "../contexts/NoteContext";
import { DELETE_NOTE } from "../contexts/noteActions";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notes = useContext(NotesContext);
  const dispatch = useContext(NotesDispatchContext);
  const note = notes.find((note) => note.id === id);

  return (
    <Layout>
      <div className="d-flex flex-column mt-5">
        <h5 className="text-muted text-center mb-5">Your Note</h5>
        <Note note={note} />
        <div className="d-flex gap-2 mt-3" role="group">
          <Button onClick={() => navigate(-1)} variant="outline-dark">Back</Button>
          <Button onClick={() => navigate(`/edit/${note.id}`)} variant="outline-dark">Edit</Button>
          <Button
            onClick={() => {
              navigate(-1);
              dispatch({ type: DELETE_NOTE, payload: note.id });
            }}
            variant="outline-danger"
          >
            Delete
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default View;
