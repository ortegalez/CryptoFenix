// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CoinListContainer from "./components/CoinListContainer/CoinListContainer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import Coin from "./components/Coin/Coin";
import DollarQuotes from "./components/DollarQuotes/DollarQuotes";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CoinListContainer />} />
          <Route path="/coin/:idCoin" element={<Coin />} />
          <Route path="/us" element={<AboutUs />} />
          <Route path="/dollarQuotes" element={<DollarQuotes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
