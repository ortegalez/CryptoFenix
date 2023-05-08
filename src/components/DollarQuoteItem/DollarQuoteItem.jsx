import React from "react";

const DollarQuoteItem = ({ dollar }) => {
  return (
    <div className=" m-3 d-flex border-bottom">
      <div style={{ width: "18rem" }}>
        <h5 className="text-muted">{dollar.casa.nombre}</h5>
      </div>
      <div style={{ width: "12rem" }}>
        <span>Buy</span>
        <h5>
          <span className="text-muted">ARS </span>
          {dollar.casa.compra}
        </h5>
      </div>
      <div style={{ width: "12rem" }}>
        <span className="text-muted">Sell</span>
        <h5>
          <span className="text-muted">ARS </span>
          {dollar.casa.venta}
        </h5>
      </div>
    </div>
  );
};

export default DollarQuoteItem;
