import CryptoTracker from "./Components/CryptoTracker";
import About from "./Components/About";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Explore from "./Components/Explore";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CryptoExplore from "./Components/CryptoExplore";
import SIPCalculator from "./Components/SIPCalculator";
import LumpsumCalculator from "./Components/LumpSum";
import MutualFunds from "./Components/FooterComponents/MutualFunds";
import TypesOfFunds from "./Components/FooterComponents/TypesOfFunds";
import HowToInvest from "./Components/FooterComponents/HowToInvest";
import MutualFundsReturns from "./Components/FooterComponents/MutualFundReturns";
import InvestmentPlan from "./Components/FooterComponents/InvestmentPlan";
import Questions from "./Components/FooterComponents/Questions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crypto" element={<CryptoTracker />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explorecrypto" element={<CryptoExplore />} />
        <Route path="/SIPCalculator" element={<SIPCalculator />} />
        <Route path="/LumpsumCalculator" element={<LumpsumCalculator />} />
        <Route path="/MutualFunds" element={<MutualFunds />} />
        <Route path="/TypesOfFunds" element={<TypesOfFunds />} />
        <Route path="/HowToInvest" element={<HowToInvest />} />
        <Route path="/MutualFundsReturns" element={<MutualFundsReturns />} />
        <Route path="/InvestmentPlan" element={<InvestmentPlan />} />
        <Route path="/Questions" element={<Questions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
