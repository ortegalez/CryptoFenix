import React from "react";
import { useEffect, useState } from "react";
import "../DollarQuotes/DollarQuotes.css";
import DollarQuoteItem from "../DollarQuoteItem/DollarQuoteItem";
import News from "../DollarQuotes/News";

const DollarQuotes = () => {
  const [allDollars, setAllDollars] = useState([]);

  let url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setAllDollars(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(allDollars);

  const filterData = () => {
    return allDollars.filter(
      (item) =>
        ![
          "Dolar Soja",
          "Dolar turista",
          "Dolar",
          "Bitcoin",
          "Argentina",
        ].includes(item.casa.nombre)
    );
  };

  return (
    <div className="m-3">
      <h2>Types of American dollar in Argentina</h2>
      <div className="row mt-5">
        <div className="col-6 d-flex justify-content-center align-items-center img-fluid">
          <img className="w-75" src="./notebook.png" alt="notebook" />
        </div>
        <div className=" col-6 ">
          {filterData().map((dollar) => (
            <DollarQuoteItem key={dollar.casa.nombre} dollar={dollar} />
          ))}
        </div>
      </div>

      <News />
    </div>
  );
};

export default DollarQuotes;
