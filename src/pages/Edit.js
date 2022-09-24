import React, { useContext, useState } from "react";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router";
import { NotesContext, NotesDispatchContext } from "../contexts/NoteContext";
import { UPDATE_NOTE } from "../contexts/noteActions";

const Edit = () => {
  const { id } = useParams()
  const notes = useContext(NotesContext)
  const dispatch = useContext(NotesDispatchContext)
  const note = notes.find(note => note.id === id)
  const navigate = useNavigate();

  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)
  const error = !title && {title: "Title is required"}

  const editorProps = {title, setTitle, content, setContent, error, heading: "Edit Note"}

  const handleSave = () => {
    if(!error) {
      dispatch({
        type: UPDATE_NOTE,
        payload: {
          id: note.id,
          title: title,
          content: content
        }
      })
      navigate(-1)
    }
  }

  return (
    <Layout>
      <Editor {...editorProps}>
        <div className="d-flex gap-2" role="group">
          <Button onClick={() => handleSave()} variant="outline-dark">Save</Button>
          <Button onClick={() => navigate(-1)} variant="outline-dark">
            Cancel
          </Button>
        </div>
      </Editor>
    </Layout>
  );
};

export default Edit;
