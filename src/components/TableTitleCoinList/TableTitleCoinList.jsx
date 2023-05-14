import React from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import "../TableTitleCoinList/TableTitleCoinList.css";

const TableTitleCoinList = () => {
  const titles = [
    "#",
    "Coin",
    "Price",
    "Price Change",
    "Volume (24h)",
    "Market Cap",
  ];

  return (
    <tr>
      <th>#</th>
      <th>Coin</th>
      <th>
        Price <HiChevronUpDown onClick={() => console.log("Hola soy click")} />
      </th>
      <th className="pointer" onClick={() => console.log("Ordenar")}>
        Price Change (24h)
        <HiChevronUpDown />
      </th>
      <th>Volume (24h)</th>
      <th>
        Market Cap
        <HiChevronUpDown />
      </th>
    </tr>
  );
};

export default TableTitleCoinList;
