import React from "react";
import bgImage from "../assets/background.jpg";
import progressBg from "../assets/progressBg.jpg";
import Courses from "./Courses";


const Home = () => {
  return (
    <>
      <section
        className="container-fluid"
        style={{
          padding: "5rem 0",
          minHeight: "100vh",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="row mx-0 ms-md-5 my-auto">
          <div
            className="text-center"
            style={{ marginTop: "14rem", marginLeft: "30rem" }}
          >
            <h1
              className="bold-header fw-bolder text-light "
              style={{ fontSize: "6.5rem" }}
            >
              Darklight Chess <br /> Academy
            </h1>
            <p style={{ fontSize: "1.7rem", color: "#eee", padding: "1rem 0" }}>
              Where you learn chess with professionals.
            </p>
            <button
              type="button"
              className="btn btn-primary d-inline-block text-light me-2 fw-bold rounded-4"
              style={{ fontSize: "1.7rem", padding: ".7rem 3rem" }}
            >
              Get Started
            </button>
            <button
              type="button"
              className="btn btn-dark bg-light text-dark ms-3 fw-bold rounded-4"
              style={{ fontSize: "1.7rem", padding: ".7rem 3rem" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Courses />

      <div
        class="container-fluid my-5 d-flex flex-column justify-content-center position-relative"
        style={{
          backgroundImage: `url(${progressBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          class="row g-4 "
          style={{
            padding: "8rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        >
          <div class="col-md-6 col-lg-3" style={{ zIndex: 2 }}>
            <div class=" text-center p-4 ">
              <h1 class=" text-light fw-bolder display-1">80+</h1>
              <h3 class=" text-light">Clients</h3>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class=" text-center p-4">
              <h1 class=" text-light fw-bolder display-1">7+</h1>
              <h3 class=" text-light">Countries</h3>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="text-center p-4">
              <h1 class=" text-light fw-bolder display-1">500+</h1>
              <h3 class=" text-light">Students Enrolled</h3>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="text-center p-4">
              <h1 class=" text-light fw-bolder display-1">25+</h1>
              <h3 class=" text-light">Chess Coaches</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
