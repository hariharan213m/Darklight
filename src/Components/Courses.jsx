import React from "react";
import onlineClass from "../assets/rb_6428.png";
import LazyLoad from "react-lazyload";
import offlineClass from "../assets/5385181.jpg";
import { Link } from "react-router-dom";
import OnlineClasses from "./OnlineClasses";
import AcademicPrograms from "./AcademicPrograms";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Courses = () => {
  const {
    handleShow,
    showModal,
    handleClose,
    formData,
    handleChange,
    handleSubmit,
  } = useContext(DataContext);
  return (
    <>
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
                you're a beginner learning the basics or an advanced player
                aiming to refine your strategy, our courses are designed to
                guide you every step of the way.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="row justify-content-evenly">
            {/* Online Class Card */}
            <div className="col-12 col-sm-6 col-md-5 col-lg-5 mb-4 d-flex justify-content-center">
              <div
                className="card border-0"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(to bottom right, #ffffff, #dfe9f3)",
                  boxShadow: "0 4px 12px rgba(0, 123, 255, 0.5)",
                }}
              >
                <LazyLoad height={300} offset={100}>
                  <img
                    src={onlineClass}
                    className="card-img-top"
                    alt="Online-Class"
                    loading="lazy"
                    style={{
                      height: "300px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                </LazyLoad>
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
            <div className="col-12 col-sm-6 col-md-5 col-lg-5 mb-4 d-flex justify-content-center">
              <div
                className="card border-0"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(to bottom right, #ffffff, #e3f2fd)",
                  boxShadow: "0 4px 12px rgba(0, 128, 0, 0.5)",
                }}
              >
                <LazyLoad height={300} offset={100}>
                  <img
                    src={offlineClass}
                    loading="lazy"
                    className="card-img-top"
                    alt="Offline-Class"
                    style={{
                      height: "300px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                </LazyLoad>
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
                  <button
                    onClick={handleShow}
                    className="btn rounded-pill text-light"
                    style={{
                      backgroundColor: "#007b83",
                      padding: ".7rem 1.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        {showModal && (
          <div
            className="modal show d-block align-content-center"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content" style={{ padding: "30px 45px" }}>
                <div className="modal-header">
                  <div>
                    <h5
                      className="modal-title fw-bold"
                      style={{ fontSize: "2rem" }}
                    >
                      Book Now
                    </h5>
                    <p style={{ fontSize: "1.5rem" }}>
                      Please fill the below details.
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "1.4rem",
                      padding: "8px",
                      letterSpacing: 1,
                    }}
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="form-label"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Name
                      </label>
                      <input
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        style={{ fontSize: "12px", padding: "10px" }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="contactNo"
                        className="form-label"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Contact Number
                      </label>
                      <input
                        value={formData.contactNo}
                        onChange={handleChange}
                        style={{ fontSize: "12px", padding: "10px" }}
                        type="tel"
                        className="form-control"
                        id="contactNo"
                        name="contactNo"
                        placeholder="Enter Your Number"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="mode"
                        className="form-label"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Mode (Online/Offline)
                      </label>
                      <select
                        style={{ fontSize: "12px", padding: "10px" }}
                        className="form-select"
                        id="mode"
                        name="mode"
                        required
                        value={formData.mode}
                        onChange={handleChange}
                      >
                        <option
                          value=""
                          disabled
                          selected
                          style={{ fontSize: "12px", padding: "10px" }}
                        >
                          Choose mode
                        </option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="level"
                        className="form-label"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Choose a Level
                      </label>
                      <select
                        className="form-select"
                        id="level"
                        name="level"
                        required
                        style={{ fontSize: "12px", padding: "10px" }}
                        value={formData.level}
                        onChange={handleChange}
                      >
                        <option value="" disabled selected>
                          Choose level
                        </option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="master">Master</option>
                        <option value="grandmaster">Grandmaster</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="location"
                        className="form-label"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Location
                      </label>
                      <input
                        value={formData.location}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        placeholder="Enter your location"
                        required
                        style={{ fontSize: "12px", padding: "10px" }}
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-secondary rounded-5"
                        onClick={handleClose}
                        style={{
                          fontSize: "1.4rem",
                          padding: "8px",
                          letterSpacing: 1,
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary rounded-5"
                        style={{
                          fontSize: "1.4rem",
                          padding: "6px 15px",
                          letterSpacing: 1,
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <OnlineClasses />
      <AcademicPrograms />
    </>
  );
};

export default Courses;
