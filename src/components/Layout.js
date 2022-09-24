import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ navItemRight, children }) => {
  return (
    <div>
      <Navbar navItemRight={navItemRight}/>
      <div
        className="layout__container container-sm container-fluid"
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
