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
import Videos from "./Components/FooterComponents/Videos";
import Equity from "./Components/FooterComponents/Equity";
import Debt from "./Components/FooterComponents/Debt";
import ELSS from "./Components/FooterComponents/ELSS";

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
        <Route path="/sipcalculator" element={<SIPCalculator />} />
        <Route path="/lumpsumCalculator" element={<LumpsumCalculator />} />
        <Route path="/mutualFunds" element={<MutualFunds />} />
        <Route path="/typesOfFunds" element={<TypesOfFunds />} />
        <Route path="/howToInvest" element={<HowToInvest />} />
        <Route path="/mutualFundsReturns" element={<MutualFundsReturns />} />
        <Route path="/investmentPlan" element={<InvestmentPlan />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/equity" element={<Equity/>} />
        <Route path="/debt" element={<Debt/>} />
        <Route path="/elss" element={<ELSS/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
