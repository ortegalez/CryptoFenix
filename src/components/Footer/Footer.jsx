import React from "react";

export const Footer = () => {
  return (
    <div>
      <ul className="nav justify-content-center border-top">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
      <p className="text-center">Victor Ortega 2023 - All rights reserved.</p>
    </div>
  );
};
