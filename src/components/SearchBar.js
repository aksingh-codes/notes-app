import React from "react";
import Button from "./Button";

const SearchBar = () => {
  return (
    <form className="searchbar__flex d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button variant="outline-dark">Search</Button>
    </form>
  );
};

export default SearchBar;
