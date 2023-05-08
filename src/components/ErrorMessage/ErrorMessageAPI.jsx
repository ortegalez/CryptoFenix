import React from "react";
import { BiNoSignal } from "react-icons/bi";

const ErrorMessageAPI = () => {
  return (
    <div className=" vh-100 text-center d-flex flex-column justify-content-center">
      <div>
        <div>
          <BiNoSignal className="text-danger fs-1" />
        </div>
        <h2>Sorry... We have problems!</h2>
      </div>
      <div>
        <span>Please refresh API url. You can access the following link:</span>
      </div>
      <div>
        <a
          href="https://www.coingecko.com/en/api/documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.coingecko.com/en/api/documentation
        </a>
      </div>
    </div>
  );
};

export default ErrorMessageAPI;
