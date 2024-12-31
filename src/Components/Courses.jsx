import React from "react";
import onlineClass from "../assets/rb_6428.png";
import playBots from "../assets/19198019.jpg";
import offlineClass from "../assets/5385181.jpg";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section
      id="courses"
      className="container d-flex align-items-center rounded-5"
      style={{
        minHeight: "100vh",
        backgroundColor: "rgb(42, 170, 138, 0.1)",
      }}
    >
      <div className="row justify-content-center w-100 flex-wrap">
        {/* Section Header */}
        <div className="row w-100">
          <div
            className="col text-center pb-5"
            style={{ fontFamily: "'Bodoni', serif" }}
          >
            <h1
              className="fw-bold "
              style={{
                color: "	#009E60",
                fontSize: "4.5rem",
                fontFamily: "'Bodoni', serif",
                letterSpacing: ".5px",
              }}
            >
              Your Chess Journey Starts Here
            </h1>
            <p className="lead" style={{ fontSize: "2rem" }}>
              Embark on an exciting adventure into the world of chess. Whether
              you're a beginner learning the basics or an advanced player aiming
              to refine your strategy, our courses are designed to guide you
              every step of the way.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row justify-content-evenly">
          {/* Online Class Card */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div
              className="card shadow-lg border-0"
              style={{
                width: "100%",
                maxWidth: "370px",
                borderRadius: "20px",
                background:
                  "linear-gradient(to bottom right, #ffffff, #dfe9f3)",
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
                  Enhance your learning experience with interactive online
                  classes tailored for your needs.
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

          {/* Offline Class Card */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div
              className="card shadow-lg border-0"
              style={{
                width: "100%",
                maxWidth: "370px",
                borderRadius: "20px",
                background:
                  "linear-gradient(to bottom right, #ffffff, #e3f2fd)",
              }}
            >
              <img
                src={offlineClass}
                className="card-img-top"
                alt="Offline-Class"
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
                  Experience face-to-face learning with personalized attention
                  in a traditional classroom setting.
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

          {/* Upcoming Events Card */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div
              className="card shadow-lg border-0"
              style={{
                width: "100%",
                maxWidth: "370px",
                borderRadius: "20px",
                background:
                  "linear-gradient(to bottom right, #ffffff, #fbeaff)",
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
                <p
                  className="card-text text-secondary"
                  style={{ fontSize: "1.5rem" }}
                >
                  Stay updated with the latest chess tournaments, workshops, and
                  training camps. Register now to enhance your skills and
                  compete with the best!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
