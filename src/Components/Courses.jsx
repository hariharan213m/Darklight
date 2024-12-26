import React from "react";
import onlineClass from "../assets/7012611.jpg";
import playBots from "../assets/19198019.jpg";
import offlineClass from "../assets/5385181.jpg";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section
      id="courses"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#e9eaec",
        paddingLeft: "9%",
        paddingRight: "9%",
      }}
    >
      <div className="row justify-content-center w-100 flex-wrap">
        <div className="row ">
          <div
            className="col text-center pb-5"
            style={{ fontFamily: "'Bodoni', serif" }}
          >
            <h1
              className="fw-bold text-uppercase"
              style={{
                color: "#d32f2f",
                fontSize: "3.5rem",
                fontFamily: "'Bodoni', serif",
              }}
            >
              Why Learn Chess with Us?
            </h1>
            <p className="lead" style={{ fontSize: "2rem" }}>
              Our chess courses are designed for all skill levels, offering
              personalized learning experiences and expert instruction. Join
              thousands of students who have already improved their chess game.
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 mb-4 d-flex justify-content-center">
          <div
            className="card shadow-lg border-0"
            style={{
              width: "100%",
              maxWidth: "370px",
              borderRadius: "20px",
              background: "linear-gradient(to bottom right, #ffffff, #dfe9f3)",
            }}
          >
            <img
              src={onlineClass}
              className="card-img-top"
              alt="Online-Class"
              style={{
                height: "300px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                objectFit: "cover",
              }}
            />
            <div className="card-body text-center">
              <h5
                className="card-title fw-bolder"
                style={{ color: "#3366cc", fontSize: "2.5rem" }}
              >
                Online Class
              </h5>
              <p
                className="card-text text-secondary"
                style={{ fontSize: "1.5rem" }}
              >
                Enhance your learning experience with interactive online classes
                tailored for your needs.
              </p>
              <Link
                to="/courses/1"
                className="btn text-light rounded-pill"
                style={{
                  backgroundColor: "#3366cc",
                  padding: ".7rem 1.5rem",
                  fontSize: "1.5rem",
                }}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
          <div
            className="card shadow-lg border-0"
            style={{
              width: "100%",
              maxWidth: "370px",
              borderRadius: "20px",
              background: "linear-gradient(to bottom right, #ffffff, #e3f2fd)",
            }}
          >
            <img
              src={offlineClass}
              className="card-img-top"
              alt="Offline-Class"
              width={"400px"}
              style={{
                height: "300px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                objectFit: "cover",
              }}
            />
            <div className="card-body text-center">
              <h5
                className="card-title fw-bolder"
                style={{ color: "#007b83", fontSize: "2.5rem" }}
              >
                Offline Class
              </h5>
              <p
                className="card-text text-secondary"
                style={{ fontSize: "1.5rem" }}
              >
                Experience face-to-face learning with personalized attention in
                a traditional classroom setting.
              </p>
              <Link
                to="/courses/2"
                className="btn rounded-pill text-light"
                style={{
                  backgroundColor: "#007b83",
                  padding: ".7rem 1.5rem",
                  fontSize: "1.5rem",
                }}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
          <div
            className="card shadow-lg border-0"
            style={{
              width: "100%",
              maxWidth: "370px",
              borderRadius: "20px",
              background: "linear-gradient(to bottom right, #ffffff, #fbeaff)",
            }}
          >
            <img
              src={playBots}
              className="card-img-top"
              alt="Play bots"
              style={{
                height: "300px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                objectFit: "cover",
              }}
            />
            <div className="card-body text-center">
              <h5
                className="card-title fw-bolder"
                style={{ color: "#8424d9", fontSize: "2.5rem" }}
              >
                Upcoming Events
              </h5>
              <h5
                className="card-title fw-bolder"
                style={{ color: "#8424d9", fontSize: "2.5rem" }}
              >
                Don't Miss Out
              </h5>
              <p
                className="card-text text-secondary"
                style={{ fontSize: "1.5rem" }}
              >
                Stay updated with the latest chess tournaments, workshops, and
                training camps. Register now to enhance your skills and compete
                with the best!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
