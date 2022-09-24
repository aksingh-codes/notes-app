import React, { useEffect, useState } from "react";
// import Button from "./Button";

const SearchBar = ({ notes, setNotesGallery }) => {
  const [text, setText] = useState("");
  const handleSearch = (e) => {
    e && e.preventDefault()
    const newNotes = notes.filter(note => {
      const searchText = text.toLowerCase()
      const title = note.title.toLowerCase()
      const content = note.content.toLowerCase()

      if(title.includes(searchText) || content.includes(searchText)) {
        return true
      }

      return false
    })
    setNotesGallery(newNotes)
  }
  
  useEffect(() => {
    handleSearch()
  }, [text])
  

  return (
    <form className="searchbar__flex d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={e => setText(e.target.value)}
      />
      {/* <Button onClick={e => handleSearch(e)} variant="outline-dark">Search</Button> */}
    </form>
  );
};

export default SearchBar;
