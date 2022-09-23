import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div
        style={{border: "1px solid black" }}
        className="container-sm container-fluid"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
