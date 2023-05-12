import React from "react";

import "../Navbar/Navbar.css";
import { NavLink, Link } from "react-router-dom";
import logoFenix from "/public/logoFenix.png";
import { useState } from "react";
import { useCoinContext } from "../../context/CoinContext";
import SearchList from "../SeachList/SearchList";

const Navbar = () => {
  const { data } = useCoinContext();
  const [search, setSearch] = useState("");

  // const filteredCoins = data.filter(
  //   (coin) =>
  //     coin.name.toLowerCase().includes(search.toLowerCase()) ||
  //     coin.symbol.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <NavLink className="navbar-brand navbar-logo" to="/">
          <span>CryptoFenix</span>
          <img className="navbar-img" src={logoFenix} alt="logo Fenix" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/dollarQuotes"
              >
                Dollar in Argentina
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/us">
                About Us
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div
              className="d-flex flex-column align-items-start m-3 p-2"
              style={{ width: "24rem" }}
            >
              <SearchList />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
