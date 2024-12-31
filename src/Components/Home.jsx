import React from "react";
import homeImage from "../assets/10124522.jpg";
import Progress from "./Progress";
import DemoClass from "./DemoClass";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <section
        className="container"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start ps-md-5">
            <h1
              className="bold-header fw-bolder text-dark"
              style={{
                fontSize: "6rem",
                letterSpacing: "1px",
              }}
            >
              Darklight Chess <br /> Academy
            </h1>
            <p style={{ fontSize: "1.4rem", color: "#555", padding: "1rem 0" }}>
              Where you learn chess with professionals.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <Link
                to="courses"
                className="btn btn-primary d-inline-block text-light me-2 fw-bold rounded-4"
                style={{
                  fontSize: "1.5rem",
                  padding: ".7rem 3rem",
                }}
              >
                Get Started
              </Link>
              <button
                type="button"
                className="btn btn-outline-dark ms-3 fw-bold rounded-4"
                style={{
                  fontSize: "1.5rem",
                  padding: ".7rem 3rem",
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <img
              src={homeImage}
              alt="home-image"
              className="img-fluid" // Makes image responsive
              style={{
                maxWidth: "100%",
                height: "auto", // Ensures the image maintains its aspect ratio
              }}
            />
          </div>
        </div>
      </section>
      <DemoClass />
      <Progress />

      <section>
        <div
          className="pt-5 container"
          style={{ fontFamily: '"Bodoni", serif' }}
        >
          <h1
            className="text-dark fw-bolder text-center display-3"
            style={{ fontFamily: '"Bodoni", serif' }}
          >
            Why Dark Light
          </h1>
          <p
            className="text-dark text-center mt-3"
            style={{ fontSize: "1.5rem", letterSpacing: 1.2 }}
          >
            We make your children learn chess with engaging activities
            throughout the classes, They don’t learn only chess but also we
            encourage their curiosity with learning and fun, They learn moral
            values other than chess Are you looking for learning chess online,
            Join dark light chess academy where we encourage children and making
            learning chess a fun
          </p>
        </div>

        <div className="container py-5">
          <div className="row">
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              style={{ fontFamily: '"Bodoni", serif' }}
            >
              <h1
                className="text-dark fw-bolder display-4"
                style={{ fontFamily: '"Bodoni", serif' }}
              >
                Vision
              </h1>
              <p
                className="text-dark mt-3"
                style={{ fontSize: "1.5rem", letterSpacing: 1.2 }}
              >
                Our vision is to make each student a chess master and empower
                professional chess talent to coach students.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <h1
                className="text-dark fw-bolder display-4"
                style={{ fontFamily: '"Bodoni", serif' }}
              >
                Mission
              </h1>
              <p
                className="text-dark mt-3"
                style={{ fontSize: "1.5rem", letterSpacing: 1.2 }}
              >
                Our mission is to create a virtual place where people from all
                over the world can learn chess.
              </p>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default Home;
