import CryptoTracker from "./Components/CryptoTracker";
import About from "./Components/About";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Explore from "./Components/Explore";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/crypto" element={<CryptoTracker />} />
      <Route path = "/explore" element={<Explore/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
