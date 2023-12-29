import React from "react";
import "../css/specials.css";
import Card from "./Card";
export default function Specials() {
  return (
    <div className="container">
      <div className="Specials p-5 ">
        <h2 className="SectionTitle mb-3">Specials</h2>
        <div className="row cards p-0 d-flex justify-content-between ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
