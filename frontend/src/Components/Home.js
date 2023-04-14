import React, { useEffect } from "react";
import SearchBar from "./SearchBar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <SearchBar/>
    </>
  );
};

export default Home;
