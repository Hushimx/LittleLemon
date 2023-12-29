import React from "react";
import "../css/hero.css";
import img1 from "../restauranfood 1.png";
export default function Header() {
  return (
    <>
      <div className="hero row d-flex align-items-center px-4">
        <div className="container">
          <div className="leftSide col-12 col-lg-6 offset-1">
            <div className="title">
              <h1 className="m-0">Little Lemon</h1>
              <p>New Yourk</p>
            </div>
            <p className="text-wrap w-50">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Button</button>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="element1 d-none d-md-flex">
              <div style={{ transform: "rotate(-31deg)" }}>
                <img src={img1}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
