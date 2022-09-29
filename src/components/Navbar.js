import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({navItemRight}) => {
  return (
    <nav className="navbar bg-dark shadow position-fixed w-100 top-0" style={{zIndex: 100}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light">Notes</Link>
        {navItemRight}
      </div>
    </nav>
  );
};

export default Navbar;
