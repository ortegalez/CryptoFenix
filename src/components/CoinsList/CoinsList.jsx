import React, { useState } from "react";
import CoinItem from "../CoinItem/CoinItem";
import TableTitleCoinList from "../TableTitleCoinList/TableTitleCoinList";
import { HiChevronUpDown } from "react-icons/hi2";
import "../TableTitleCoinList/TableTitleCoinList.css";

const CoinsList = ({ coins }) => {
  const [data, setData] = useState(coins);

  console.log(data);

  const handleCurrentPrice = () => {
    const sortedData = [...data].sort(
      (a, b) => b.current_price - a.current_price
    );
    setData(sortedData);
    console.log("Ordenado por precio");
  };

  const handlePriceChangePercentage24h = () => {
    const sortedData = [...data].sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    );
    setData(sortedData);
    console.log("Ordenado por porcentaje de cambio");
  };

  const handleMarketCap = () => {
    const sortedData = [...data].sort((a, b) => b.market_cap - a.market_cap);
    setData(sortedData);
    console.log("Ordenado por Marketcap");
  };

  // console.log(data);

  return (
    <div>
      <table className="table table-hover w-100">
        <thead>
          {/* <TableTitleCoinList /> */}
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>
              Price
              <button>
                <HiChevronUpDown onClick={handleCurrentPrice} />
              </button>
            </th>
            <th className="pointer">
              Price Change (24h)
              <button>
                <HiChevronUpDown onClick={handlePriceChangePercentage24h} />
              </button>
            </th>
            <th>Volume (24h)</th>
            <th>
              Market Cap
              <button>
                <HiChevronUpDown onClick={handleMarketCap} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <CoinItem key={coin.id} coin={coin} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsList;
