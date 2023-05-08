import React from "react";
import CoinItem from "../CoinItem/CoinItem";

const titles = [
  "#",
  "Coin",
  "Price",
  "Price Change",
  "Volume (24h)",
  "Market Cap",
];

const CoinsList = ({ coins }) => {
  return (
    <div>
      <table className="table table-hover w-100">
        <thead>
          <tr>
            {titles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {coins.map((coin, index) => (
            <CoinItem key={coin.id} coin={coin} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsList;
