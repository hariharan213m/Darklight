import React from "react";
import progressBg from "../assets/progressBg.jpg";
import { FaChild } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChess } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import kidChess from "../assets/kid.jpg";
import { useState } from "react";
const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    mode: "",
    level: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data or perform other actions
    console.log("Name:", formData.name);
    console.log("Contact Number:", formData.contactNo);
    console.log("Mode (Online/Offline):", formData.mode);
    console.log("Level:", formData.level);
    console.log("Location:", formData.location);

    // Reset the form after submission
    setFormData({
      name: "",
      contactNo: "",
      mode: "",
      level: "",
      location: "",
    });
  };
  return (
    <section id="about"> 
      <div
        style={{
          backgroundImage: `url(${progressBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "rgba(10, 35, 146, 0.58)",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            className="text-light fw-bolder text-center"
            style={{ fontSize: "4rem", padding: "0 2rem" }}
          >
            About Us
          </h1>
        </div>
      </div>

      <div className="pt-5 container" style={{ fontFamily: '"Bodoni", serif' }}>
        <h1
          className="text-light fw-bolder text-center display-3"
          style={{ fontFamily: '"Bodoni", serif' }}
        >
          Why Dark Light
        </h1>
        <p
          className="text-light text-center mt-3"
          style={{ fontSize: "1.5rem", letterSpacing: 1.2 }}
        >
          We make your children learn chess with engaging activities throughout
          the classes, They don’t learn only chess but also we encourage their
          curiosity with learning and fun, They learn moral values other than
          chess Are you looking for learning chess online, Join dark light chess
          academy where we encourage children and making learning chess a fun
        </p>
      </div>

      <div className="container py-5">
        <div className="row">
          <div
            className="col-md-6 text-center mb-4 mb-md-0"
            style={{ fontFamily: '"Bodoni", serif' }}
          >
            <h1
              className="text-light fw-bolder display-4"
              style={{ fontFamily: '"Bodoni", serif' }}
            >
              Vision
            </h1>
            <p
              className="text-light mt-3"
              style={{ fontSize: "1.5rem", letterSpacing: 1.2 }}
            >
              Our vision is to make each student a chess master and empower
              professional chess talent to coach students.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <h1
              className="text-light fw-bolder display-4"
              style={{ fontFamily: '"Bodoni", serif' }}
            >
              Mission
            </h1>
            <p
              className="text-light mt-3"
              style={{ fontSize: "1.5rem", letterSpacing: 1.2 }}
            >
              Our mission is to create a virtual place where people from all
              over the world can learn chess.
            </p>
          </div>
        </div>
      </div>

      <section
        className="py-5 align-content-center"
        style={{
          fontFamily: '"Bodoni", serif',
          backgroundColor: "#e9eaec",
          padding: "0 9%",
          height: "100vh",
        }}
      >
        <div className="container text-center pb-5">
          <h2 className="fw-bold display-4 text-primary">
            <FaChild className="me-2" /> Child Centric
          </h2>
          <p className="lead text-muted" style={{ fontSize: "1.5rem" }}>
            We prioritize your child’s development and engagement through
            structured chess activities.
          </p>
        </div>

        <div className="container row align-items-center ">
          <div className="col-md-6">
            <div className="card shadow-sm border-0 rounded-4 mb-4">
              <div className="card-body text-center">
                <FaUserTie className="text-primary display-3 mb-3" />
                <h3 className="fw-bold">Trained & Experienced Staff</h3>
                <p className="text-muted" style={{ fontSize: "1.5rem" }}>
                  Our coaches are certified professionals dedicated to your
                  child's growth.
                </p>
              </div>
            </div>

            <div className="card shadow-sm border-0 rounded-4 mb-4">
              <div className="card-body text-center">
                <FaChessKing className="text-primary display-3 mb-3" />
                <h3 className="fw-bold">Engaging Playful Activity</h3>
                <p className="text-muted" style={{ fontSize: "1.5rem" }}>
                  Interactive sessions to keep children excited and curious
                  about chess.
                </p>
              </div>
            </div>

            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body text-center">
                <FaChess className="text-primary display-3 mb-3" />
                <h3 className="fw-bold">Child Friendly</h3>
                <p className="text-muted" style={{ fontSize: "1.5rem" }}>
                  A safe, fun environment tailored for young learners.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={kidChess}
              alt="Child Centric"
              className="img-fluid rounded-4"
              style={{ maxWidth: "550px" }}
            />
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#001524" }}>
        <div className="container text-center mb-5">
          <h2 className="fw-bold display-4 text-success">
            Our Academic <span className="text-warning">Programs</span>
          </h2>
          <p className="lead text-light">
            Tailored courses for every age group, from children to adults.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body text-center">
                  <FaChild className="text-warning display-3 mb-3" />
                  <h3 className="fw-bold">Children</h3>
                  <p className="text-muted" style={{ fontSize: "1.5rem" }}>
                    Building foundational skills and confidence for young
                    learners.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body text-center">
                  <FaChess className="text-warning display-3 mb-3" />
                  <h3 className="fw-bold">Adults</h3>
                  <p className="text-muted" style={{ fontSize: "1.5rem" }}>
                    Courses for adults looking to enhance their competitive edge
                    in chess.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <p
            className="lead  mx-auto text-light"
            style={{ maxWidth: "800px", fontSize: "1.5rem", letterSpacing: 1 }}
          >
            In Dark Light, we encourage both individual and group classes. Join
            a group of chess buddies to learn together, or opt for personalized
            one-on-one coaching sessions for a tailored experience.
          </p>
        </div>
      </section>
      <section className="py-5" style={{ backgroundColor: "#e9eaec" }}>
        <div className="container">
          <h1 className="fw-bold display-4 text-center">Contact Us</h1>
          <p className="text-center mb-4" style={{ fontSize: "1.5rem" }}>
            Please fill out the form below, and we'll get back to you soon.
          </p>
          <form onSubmit={handleSubmit} className="row g-4">
            <div className="col-md-6 form-group">
              <input
                type="text"
                className="form-control floating-input"
                style={{ fontSize: "1.5rem" }}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="floating-label"
                style={{ fontSize: "1.5rem" }}
              >
                Name
              </label>
            </div>
            <div className="col-md-6 form-group">
              <input
                type="tel"
                className="form-control floating-input"
                style={{ fontSize: "1.5rem" }}
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label
                htmlFor="contactNo"
                className="floating-label"
                style={{ fontSize: "1.5rem" }}
              >
                Contact Number
              </label>
            </div>
            <div className="col-md-6 form-group">
              <select
                className="form-select floating-input form-control"
                style={{ fontSize: "1.5rem" }}
                id="mode"
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                placeholder=" "
                required
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <label
                htmlFor="mode"
                className="floating-label"
                style={{ fontSize: "1.5rem", color: "#999" }}
              >
                Mode (Online/Offline)
              </label>
            </div>
            <div className="col-md-6 form-group">
              <select
                className=" form-select floating-input form-control"
                style={{ fontSize: "1.5rem" }}
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                placeholder=" "
                required
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="master">Master</option>
                <option value="grandmaster">Grandmaster</option>
              </select>
              <label
                htmlFor="level"
                className="floating-label"
                style={{ fontSize: "1.5rem", color: "#999" }}
              >
                Choose a Level
              </label>
            </div>
            <div className="col-md-12 form-group">
              <input
                type="text"
                className="form-control floating-input"
                style={{ fontSize: "1.5rem" }}
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label
                htmlFor="location"
                className="floating-label"
                style={{ fontSize: "1.5rem" }}
              >
                Location
              </label>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button
                type="reset"
                className="btn btn-secondary me-2"
                style={{ fontSize: "1.4rem", padding: "8px", letterSpacing: 1 }}
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn btn-primary "
                style={{
                  fontSize: "1.4rem",
                  padding: "6px 14px",
                  letterSpacing: 1,
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default About;
