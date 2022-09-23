import React from "react";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Layout from "../components/Layout";

const Create = () => {
  return (
    <Layout>
      <Editor heading="Create Note">
        <div className="d-flex gap-2" role="group">
          <Button variant="outline-dark">Save</Button>
          <Button variant="outline-dark">Cancel</Button>
        </div>
      </Editor>
    </Layout>
  );
};

export default Create;
