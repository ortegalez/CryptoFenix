import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import TableTitleCoinList from "../TableTitleCoinList/TableTitleCoinList";

const titles = [
  "#",
  "Coin",
  "Price",
  "Price Change",
  "Volume (24h)",
  "Market Cap",
];

const CoinsList = ({ coins, search }) => {
  return (
    <div>
      <table className="table table-hover w-100">
        <thead>
          <TableTitleCoinList />
          {/* <tr>
            {titles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr> */}
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
