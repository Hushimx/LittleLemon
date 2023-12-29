import React from "react";
import "../css/header.css";
import exampleImage from "../logo.png";

export default function Header() {
  return (
    <div className="holder container-fluid">
      <nav className="row justify-content-between align-items-center">
        <div className="col-3">
          <img src={exampleImage} width="158px" height={"43px"} alt="logo" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <ul className="navItmes m-0 d-none d-md-flex">
            <li className="mx-2">Home</li>
            <li className="mx-2">About</li>
            <li className="mx-2">MENU</li>
            <li className="mx-2">Reserve</li>
          </ul>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <a>LOGIN</a>
        </div>
      </nav>
    </div>
  );
}
