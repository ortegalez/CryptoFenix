import React from "react";
import "../CoinItem/CoinItem.css";
import { Link } from "react-router-dom";

const CoinItem = ({ coin, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <Link className="coin" to={`/coin/${coin.id}`}>
          <img className="coin-image" src={coin.image} alt={coin.id} />
          <div className="coin-name">
            <span className="fw-bolder">{coin.name}</span>
            <span className="text-muted">{coin.symbol.toUpperCase()}</span>
          </div>
        </Link>
      </td>
      <td>$ {coin.current_price.toFixed(2)}</td>
      <td
        style={{
          color: coin.price_change_percentage_24h > 0 ? "green" : "red",
        }}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>$ {coin.total_volume.toLocaleString()}</td>
      <td>$ {coin.market_cap.toLocaleString()}</td>
    </tr>
  );
};

export default CoinItem;
