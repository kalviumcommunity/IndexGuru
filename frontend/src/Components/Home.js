import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FundBox from "./FundBox";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      {/* <FundBox /> */}
      <Footer />
    </>
  );
};

export default Home;
