import React from "react";
import Layout from "../components/Layout";
import { ReactComponent as Logo } from "../assets/undraw_page_not_found_re_e9o6.svg";

const PageNotFound = () => {
  return (
    <Layout>
      <div style={{ width: "100%", height: "40vw", textAlign: 'center' }}>
        <Logo style={{ width: "50%" }} />
      </div>
    </Layout>
  );
};

export default PageNotFound;
