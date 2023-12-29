import React from "react";
import "../css/about.css";
export default function About() {
  return (
    <>
      <div
        className="about container-fluid"
        style={{
          backgroundImage: "url(/images/aboutus.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="container " style={{ height: "100%" }}>
          <div className="row" style={{ height: "100%" }}>
            <div className="col-12 col-md-4 ms-0 ms-md-5 textBox p-5 d-flex flex-column">
              <h2 className="text-center mb-5">Hello</h2>
              <p
                className=" align-self-center "
                style={{ width: "240px", wordBreak: "break-all" }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. d
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
