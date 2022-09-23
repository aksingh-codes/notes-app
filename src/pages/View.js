import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Note from "../components/Note";

const View = () => {
  const note = {
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae sed sint laboriosam, temporibus qui a laudantium saepe, etiure numquam assumenda dolores. Error facilis corrupti quisquam enim, assumenda ipsum.",
  };
  return (
    <Layout>
      <div className="d-flex flex-column mt-5">
        <h5 className="text-muted text-center mb-5">Your Note</h5>
        <Note note={note} />
        <div className="d-flex gap-2 mt-3" role="group">
          <Button variant="outline-dark">Back</Button>
          <Button variant="outline-dark">Edit</Button>
          <Button variant="outline-danger">Delete</Button>
        </div>
      </div>
    </Layout>
  );
};

export default View;
