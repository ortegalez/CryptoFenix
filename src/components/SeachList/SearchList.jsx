import React, { useEffect } from "react";
import { useCoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import "../SeachList/SearchList.css";

const SearchList = () => {
  const { data } = useCoinContext();
  const { searchValue, setSearchValue } = useCoinContext();

  useEffect(() => {
    setSearchValue("");
  }, []);

  const filteredCoins = data.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleInputText = (e) => {
    setSearchValue(e.target.value);
  };

  // console.log(filteredCoins);
  // console.log(searchValue);

  return (
    <>
      <form className="d-flex" role="search">
        <div
          className="d-flex flex-column  align-items-start p-2 "
          style={{ width: "24rem" }}
        >
          <form className="d-flex w-100" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="🔎 Search a coin..."
              aria-label="Search"
              value={searchValue}
              onChange={handleInputText}
            />
          </form>

          {filteredCoins.length > 0 && searchValue !== "" ? (
            <ul
              className="list-group overflow-y-scroll mt-1 searchList"
              style={{ width: "24rem" }}
            >
              {filteredCoins.map((coin) => (
                <Link to={`/coin/${coin.id}`}>
                  <li
                    key={coin.id}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <div>
                      <img
                        className="coin-image me-2"
                        src={coin.image}
                        alt={coin.id}
                      />
                      <span className="fw-bolder me-2">{coin.name}</span>
                      <span className="text-muted">
                        {coin.symbol.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-muted">#{coin.market_cap_rank}</span>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <ul
              className="list-group mt-1 searchList"
              style={{ width: "23rem" }}
            >
              {searchValue == "" ? null : (
                <li className="list-group-item text-muted">
                  No matches for "{searchValue}"
                </li>
              )}
            </ul>
          )}
        </div>
      </form>
    </>
  );
};

export default SearchList;
