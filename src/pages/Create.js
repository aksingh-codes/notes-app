import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Layout from "../components/Layout";
import { NotesDispatchContext } from '../contexts/NoteContext'
import { CREATE_NOTE } from "../contexts/noteActions";
import { v4 as uuidv4 } from 'uuid';

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useContext(NotesDispatchContext)
  
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const error = !title && {title: "Title is required"}

  const editorProps = {title, setTitle, content, setContent, error, heading: "Create Note"}

  const handleSave = () => {
    if(!error) {
      dispatch({
        type: CREATE_NOTE,
        payload: {
          id: uuidv4(),
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

export default Create;
