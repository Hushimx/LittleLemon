import React from "react";
import img from "../Ellipse 4.png";
import { wrap } from "gsap";
export default function Review({ name, desc }) {
  return (
    <div
      className="col-12 col-md-4 my-2 d-flex flex-column mb-5 mb-md-0"
      style={{
        width: "250px",
        height: "338.66px",
        backgroundColor: "#EDEFEE",
        borderRadius: "16px",
      }}
    >
      <div className="align-self-center">
        <img
          className=""
          src={img}
          style={{
            width: "114.97px",
            height: "114.97px",
            transform: "translateY(-30px)",
          }}
          alt=""
        />
      </div>
      <h2 className="text-center" width="100px">
        Name
      </h2>
      <div
        className="align-self-center p-3 position-relative "
        style={{ width: "10rem" }}
      >
        <i
          class="fa-sharp fa-solid fa-quote-left position-absolute "
          style={{ left: "-1rem", top: "-1rem", fontSize: "2rem" }}
        ></i>
        <p
          style={{
            padding: 0,
            width: "100%",
            maxHeight: "100%",
            overflowWrap: "break-word",
            fontSize: "17px",
          }}
        >
          fsdaffafafsdfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfsfdsf
        </p>
        <i
          class="fa-sharp fa-solid fa-quote-right position-absolute"
          style={{ right: "-1rem", bottom: 0, fontSize: "2rem" }}
        ></i>
      </div>
    </div>
  );
}
