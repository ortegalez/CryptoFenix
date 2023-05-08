import React, { useEffect, useState } from "react";

import "../Coin/Coin.css";
import { Link, useParams } from "react-router-dom";

const Coin = () => {
  const [coin, setCoin] = useState({});
  const { idCoin } = useParams();

  const urlCoin = `https://api.coingecko.com/api/v3/coins/${idCoin}`;

  console.log(idCoin);

  useEffect(() => {
    fetch(urlCoin)
      .then((resp) => resp.json())
      .then((data) => setCoin(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(coin);

  return (
    <div>
      {coin && (
        <div className="m-3">
          <div className="text-primary">
            <Link to="/">
              <span>Coin List</span>
            </Link>
            <span> {">"} </span>
            <span>{coin.name}</span>
          </div>
          <div>
            {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
            <h2>{coin.name}</h2>
            <span className="border pe-2 ps-2 pt-1 pb-1 rounded-2 fw-bolder text-muted mx-auto text-uppercase">
              {coin.symbol}
            </span>
            <span>Rank #{coin.market_cap_rank}</span>
          </div>

          <h3>About</h3>
          {coin.description ? (
            <p style={{ textAlign: "justify" }}> {coin.description.en}</p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Coin;
