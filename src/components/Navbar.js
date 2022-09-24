import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({navItemRight}) => {
  return (
    <nav className="navbar bg-light shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Notes</Link>
        {navItemRight}
      </div>
    </nav>
  );
};

export default Navbar;
