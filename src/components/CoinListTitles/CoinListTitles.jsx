import React, { useState } from "react";
import { BsFillCaretUpFill } from "react-icons/bs";

const CoinListTitles = () => {
  const [activeElement, setActiveElement] = useState(4);

  const handleButtonClick = (elementId) => {
    setActiveElement(elementId);
  };

  const handleCurrentPrice = () => {
    const sortedData = [...data].sort(
      (a, b) => b.current_price - a.current_price
    );
    setData(sortedData);
    handleButtonClick(1);
  };

  const handlePriceChangePercentage24h = () => {
    const sortedData = [...data].sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    );
    setData(sortedData);
    handleButtonClick(2);
  };

  const handleVolume24h = () => {
    const sortedData = [...data].sort(
      (a, b) => b.total_volume - a.total_volume
    );
    setData(sortedData);
    handleButtonClick(3);
  };

  const handleMarketCap = () => {
    const sortedData = [...data].sort((a, b) => b.market_cap - a.market_cap);
    setData(sortedData);
    handleButtonClick(4);
  };

  return (
    <tr>
      <th>#</th>
      <th>Coin</th>
      <th onClick={handleCurrentPrice} className="pointer">
        Price
        {activeElement === 1 ? (
          <BsFillCaretUpFill className="text-success" />
        ) : (
          <BsFillCaretUpFill className="text-black-50" />
        )}
      </th>
      <th onClick={handlePriceChangePercentage24h} className="pointer">
        Price Change (24h)
        {activeElement === 2 ? (
          <BsFillCaretUpFill className="text-success" />
        ) : (
          <BsFillCaretUpFill className="text-black-50" />
        )}
      </th>
      <th onClick={handleVolume24h} className="pointer">
        Volume (24h)
        {activeElement === 3 ? (
          <BsFillCaretUpFill className="text-success" />
        ) : (
          <BsFillCaretUpFill className="text-black-50" />
        )}
      </th>
      <th onClick={handleMarketCap} className="pointer">
        Market Cap
        {activeElement === 4 ? (
          <BsFillCaretUpFill className="text-success" />
        ) : (
          <BsFillCaretUpFill className="text-black-50" />
        )}
      </th>
    </tr>
  );
};

export default CoinListTitles;
