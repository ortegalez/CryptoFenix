import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import TableTitleCoinList from "../TableTitleCoinList/TableTitleCoinList";

const CoinsList = ({ coins }) => {
  return (
    <div>
      <table className="table table-hover w-100">
        <thead>
          <TableTitleCoinList />
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
