import React from "react";
import homeImage from "../assets/10124522.jpg";
import Progress from "./Progress";
import DemoClass from "./DemoClass";
import { Link } from "react-router-dom";
import { FaChild } from "react-icons/fa";

import WhyChooseUs from "./WhyChooseUs";
import { FaUserTie } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import { FaChess } from "react-icons/fa";
import kidChess from "../assets/kid.jpg";

const Home = () => {
  return (
    <>
      <section
        className="container"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className="row align-items-center" style={{ paddingTop: "6rem" }}>
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
              <Link
                to="about"
                className="btn btn-outline-dark ms-3 fw-bold rounded-4"
                style={{
                  fontSize: "1.5rem",
                  padding: ".7rem 3rem",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <img
              src={homeImage}
              alt="home-image"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <DemoClass />
      <section
        className=" align-content-center"
        style={{
          fontFamily: '"Bodoni", serif',
          padding: "4% 9%",
        }}
      >
        <div className="container text-center pb-5">
          <h2 className="fw-bold display-2 text-primary">
            <FaChild className="me-2" /> Child Centric
          </h2>
          <p className="lead text-muted" style={{ fontSize: "1.5rem" }}>
            We prioritize your child’s development and engagement through
            structured chess activities.
          </p>
        </div>

        <div className="container row align-items-center ">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className=" h-100 d-flex border-0">
              <div className="d-flex align-items-center">
                <div
                  className="icon text-primary me-5 "
                  style={{ fontSize: "3.5rem", marginBottom: "5rem" }}
                >
                  <FaUserTie />
                </div>
                <div>
                  <h5
                    className="mb-2 text-uppercase fw-bold"
                    style={{ fontSize: "2rem" }}
                  >
                    Trained & Experienced Staff
                  </h5>
                  <p style={{ fontSize: "1.5rem" }}>
                    Our coaches are certified professionals dedicated to your
                    child's growth.
                  </p>
                </div>
              </div>
            </div>

            <div className=" h-100 d-flex border-0">
              <div className="d-flex align-items-center">
                <div
                  className="icon text-primary me-5"
                  style={{ fontSize: "3.5rem", marginBottom: "5rem" }}
                >
                  <FaChessKing />
                </div>
                <div>
                  <h5
                    className="mb-2 text-uppercase fw-bold"
                    style={{ fontSize: "2rem" }}
                  >
                    Engaging Playful Activity
                  </h5>
                  <p style={{ fontSize: "1.5rem" }}>
                    Interactive sessions to keep children excited and curious
                    about chess.
                  </p>
                </div>
              </div>
            </div>

            <div className=" h-100 d-flex border-0">
              <div
                className="d-flex align-items-center"
                style={{ lineHeight: "2" }}
              >
                <div
                  className="icon text-primary me-5"
                  style={{ fontSize: "3.5rem", marginBottom: "5rem" }}
                >
                  <FaChess />
                </div>
                <div>
                  <h5
                    className="mb-2 text-uppercase fw-bold"
                    style={{ fontSize: "2rem" }}
                  >
                    Child Friendly
                  </h5>
                  <p style={{ fontSize: "1.5rem" }}>
                    A safe, fun environment tailored for young learners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={kidChess}
              loading="lazy"
              alt="Child Centric"
              className="img-fluid rounded-4"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      <Progress />

      <WhyChooseUs />
    </>
  );
};

export default Home;
