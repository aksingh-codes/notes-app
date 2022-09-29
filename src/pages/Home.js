import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import NotesGallery from "../components/NotesGallery";
import SearchBar from "../components/SearchBar";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { NotesContext } from "../contexts/NoteContext";

const Home = () => {
  const navigate = useNavigate()
  const notes = useContext(NotesContext)
  const [notesGallery, setNotesGallery] = useState(notes)

  return (
    <Layout navItemRight={<SearchBar notes={notes} setNotesGallery={setNotesGallery} />}>
      <NotesGallery notes={notesGallery} />
      <BsFillPlusSquareFill onClick={() => navigate("/create")} className="home__plusbtn shadow" />
    </Layout>
  );
};

export default Home;
