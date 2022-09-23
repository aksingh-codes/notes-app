import React from "react";
import Layout from "../components/Layout";
import NotesGallery from "../components/NotesGallery";
import SearchBar from "../components/SearchBar";
import { BsFillPlusSquareFill } from "react-icons/bs";

const Home = () => {
  return (
    <Layout navItemRight={<SearchBar />}>
      <NotesGallery />
      <BsFillPlusSquareFill className="home__plusbtn" />
    </Layout>
  );
};

export default Home;
