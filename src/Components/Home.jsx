import React from "react";
import homeImage from "../assets/10124522.jpg";
import Progress from "./Progress";
import DemoClass from "./DemoClass";
import { Link } from "react-router-dom";
import WhyChooseUs from "./WhyChooseUs";
import ChildCentric from "./ChildCentric";
import Tournaments from "./Tournaments";
import BookDemoButton from "./BookDemoButton";
import Banner from "./Banner";
import Feedback from "./Feedback";

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
          <div
            className="col-12 col-md-6 text-center text-md-start ps-md-5"
            data-aos="fade-right"
          >
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
                data-aos="zoom-in"
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
                data-aos="zoom-in"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0"
            data-aos="fade-left"
          >
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
      </section>{" "}
      <DemoClass />
      <ChildCentric />
      <Tournaments />
      <Progress />
      <Banner />
      <WhyChooseUs />
      <Feedback />
      <BookDemoButton />
    </>
  );
};

export default Home;
