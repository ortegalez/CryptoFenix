// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CoinListContainer from "./components/CoinListContainer/CoinListContainer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import DollarQuotes from "./components/DollarQuotesContainer/DollarQuotes";
import { Footer } from "./components/Footer/Footer";
import CoinContainer from "./components/CoinContainer/CoinContainer";
import { CoinContextProvider } from "./context/CoinContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CoinContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<CoinListContainer />} />
            <Route path="/coin/:idCoin" element={<CoinContainer />} />
            <Route path="/us" element={<AboutUs />} />
            <Route path="/dollarQuotes" element={<DollarQuotes />} />
          </Routes>
          <Footer />
        </CoinContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
