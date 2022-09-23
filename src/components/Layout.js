import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div
        className="layout__container container-sm container-fluid"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
