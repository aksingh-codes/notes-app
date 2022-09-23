import React from "react";

const Navbar = ({navItemRight}) => {
  return (
    <nav className="navbar bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Notes</a>
        {navItemRight}
      </div>
    </nav>
  );
};

export default Navbar;
