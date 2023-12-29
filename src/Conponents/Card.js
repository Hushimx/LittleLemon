import React from "react";
import img from "../greek.png";
export default function Card({ name, price, desc }) {
  return (
    <div className="col-12 col-md-4 my-2" style={{ width: "20rem" }}>
      <div
        className="card"
        style={{
          width: "100%",
          backgroundColor: "#EDEFEE",
          borderRadius: "16px",
        }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body p-4">
          <div className="d-flex justify-content-between ">
            <h5 className="card-title">name</h5>
            <span className="price">22</span>
          </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
