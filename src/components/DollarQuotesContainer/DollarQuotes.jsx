import React from "react";
// import { useEffect, useState } from "react";
import "./DollarQuotes.css";
import DollarQuoteItem from "../DollarQuoteItem/DollarQuoteItem";
import News from "./News";
import Loading_1 from "../Loaders/Loading_1";
import { useFetch } from "../../helpers/useFetch";

const DollarQuotes = () => {
  const { data, loading, error } = useFetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  );

  console.log(data);

  const filterData = () => {
    return data.filter(
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

  return loading ? (
    <Loading_1 />
  ) : (
    data && (
      <div className="m-3">
        <h2 className="m-3">Types of American dollar in Argentina</h2>
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
    )
  );
};

export default DollarQuotes;
