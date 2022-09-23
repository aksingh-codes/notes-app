import React from "react";
import Layout from "../components/Layout";
import NotesGallery from "../components/NotesGallery";
import SearchBar from "../components/SearchBar";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate()

  return (
    <Layout navItemRight={<SearchBar />}>
      <NotesGallery />
      <BsFillPlusSquareFill onClick={() => navigate("/create")} className="home__plusbtn" />
    </Layout>
  );
};

export default Home;
