import React, { useEffect } from "react";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <SearchBar/>
    <Footer/>
    </>
  );
};

export default Home;
