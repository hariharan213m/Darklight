import React from "react";
import { FaChild, FaChess } from "react-icons/fa";

const AcademicPrograms = () => {
  return (
    <section className="container py-5 mb-5 rounded-5">
      <div className="container text-center mb-5">
        <h1 className="fw-bold display-2 text-success">
          Our Academic <span className="text-warning">Programs</span>
        </h1>
        <p className="text-dark" style={{ fontSize: "1.5rem" }}>
          Tailored courses for every age group, from children to adults.
        </p>
      </div>

      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-6 col-sm-6">
            <div className="h-100 d-flex border-0">
              <div className="d-flex align-items-center">
                <div
                  className="icon text-primary me-5 mb-5"
                  style={{ fontSize: "3.5rem" }}
                >
                  <FaChild />
                </div>
                <div>
                  <h5
                    className=" mb-2 text-uppercase fw-bold"
                    style={{ fontSize: "2rem" }}
                  >
                    Children
                  </h5>
                  <p style={{ fontSize: "1.5rem" }}>
                    Building foundational skills and confidence for young
                    learners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-sm-6">
            <div className=" h-100 d-flex border-0">
              <div className="d-flex align-items-center">
                <div
                  className="icon text-primary me-5 mb-5"
                  style={{ fontSize: "3.5rem" }}
                >
                  <FaChess />
                </div>
                <div>
                  <h5
                    className="mb-2 text-uppercase fw-bold"
                    style={{ fontSize: "2rem" }}
                  >
                    Adults
                  </h5>
                  <p style={{ fontSize: "1.5rem" }}>
                    Courses for adults looking to enhance their competitive edge
                    in chess.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <p
          className="lead  mx-auto text-dark"
          style={{ maxWidth: "800px", fontSize: "1.5rem" }}
        >
          In Dark Light, we encourage both individual and group classes. Join a
          group of chess buddies to learn together, or opt for personalized
          one-on-one coaching sessions for a tailored experience.
        </p>
      </div>
    </section>
  );
};

export default AcademicPrograms;
