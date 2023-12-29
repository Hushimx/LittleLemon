import React from "react";
import "../css/specials.css";
import Review from "./reviewCard";
export default function Testimonials() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#577A6E" }}>
      <div className="container">
        <div className="Specials p-5 ">
          <h2
            className="SectionTitle mb-5 text-center"
            style={{ color: "white" }}
          >
            Testimonials
          </h2>
          <div className="row cards p-0 d-flex justify-content-center  justify-content-md-between ">
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
}
