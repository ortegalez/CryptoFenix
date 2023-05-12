import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../helpers/useFetch";

export const CoinContext = createContext([]);

export const useCoinContext = () => useContext(CoinContext);

export const CoinContextProvider = ({ children }) => {
  //   const [coins, setCoins] = useState([]);
  //   let url =
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&locale=en";

  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => setCoins(data))
  //       .catch((error) => console.log(error));
  //   }, []);

  const { data, loading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );

  return (
    <CoinContext.Provider value={{ data, loading, error }}>
      {children}
    </CoinContext.Provider>
  );
};
