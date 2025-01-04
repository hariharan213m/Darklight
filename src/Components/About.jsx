import React from "react";
import tournament from "../assets/Tabs.jpg";

import { useState } from "react";
import img1 from "../assets/img1.jpg";
import { FaUser } from "react-icons/fa";
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
    console.log("Submitting Form Data:", formData); // Log the form data
    const { name, contactNo, mode, level, location } = formData;

    // Validate required fields
    if (!name || !contactNo || !mode || !level || !location) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const whatsappMessage = `Name: ${formData.name}\nContact No: ${contactNo}\nMode: ${mode}\nLevel: ${level}\nLocation: ${location}`;
    const phoneNumber = "918124482421";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank");

    setFormData({
      name: "",
      contactNo: "",
      mode: "",
      level: "",
      location: "",
    });
  };

  return (
    <section
      id="about"
      style={{
        width: "100%",
        background: "#fff",
        paddingTop: "2rem",
      }}
    >
      <div
        className="container-fluid "
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#fff",
          zIndex: 1,
          padding: "6% 9%",
        }}
      >
        <div className="row ">
          <div className="col-md-6 text-center align-content-center">
            <h1
              className="text-dark fw-bolder"
              style={{ fontSize: "4rem", letterSpacing: "1px" }}
            >
              KARUPASAAMI
            </h1>
            <h3
              className="mb-md-4"
              style={{ color: "red", letterSpacing: "1px" }}
            >
              CO-Founder Of Darklight
            </h3>
            <p style={{ fontSize: "2rem", lineHeight: "1.8" }}>
              Darklight Chess academy was a dream for me, and I started it with
              an aim to empower chess coaches and explore the world of chess
              with a motive to take chess to all the people across the globe.
            </p>
            <p
              style={{
                fontSize: "2rem",
                lineHeight: "1.8",
                color: "red",
                fontWeight: "bold",
              }}
            >
              "I strongly believe that chess is not only a game but a lifestyle,
              and chess does not require an age factor to gain knowledge".
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={img1}
              loading="lazy"
              alt="About Us"
              className="img-fluid rounded-2"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="container "
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#fff",
          zIndex: 1,
        }}
      >
        <div className="row justify-content-center">
          <div className=" p-4 " style={{ lineHeight: "1.8" }}>
            <h1
              className="text-center text-dark mb-4 display-2 fw-bold"
              style={{}}
            >
              Welcome to Darklight Chess!
            </h1>
            <p className="lead text-dark " style={{ fontSize: "2rem" }}>
              At Darklight Chess Academy, located in Tamil Nadu, we offer
              professional chess coaching for players of all levels. Whether
              you're a beginner, intermediate, advanced, or even a master, our
              expert coaches are here to help you improve and elevate your game.
            </p>
            <p className="text-dark" style={{ fontSize: "2rem" }}>
              Currently, we have thriving coaching centers in{" "}
              <strong>Kovilpatti</strong> and <strong>Thoothukudi</strong>, with
              over 70 students already benefiting from our programs. We also
              offer <strong>online chess coaching</strong> to make learning
              accessible from anywhere. Whether you're at home or on the go,
              mastering chess is just one step away! Book a{" "}
              <strong>free demo session</strong> today and experience the
              Darklight difference – at no cost!
            </p>
            <p className="text-dark" style={{ fontSize: "2rem" }}>
              Our team of highly skilled coaches includes{" "}
              <strong>Grandmasters</strong> and experienced chess professionals
              who are dedicated to helping you excel. At Darklight, you have the
              option to choose your own coach and work at your own pace.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#2c3e50",
                }}
              >
                What Keeps Us Moving
              </h2>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#7f8c8d",
                  lineHeight: "1.6",
                }}
              >
                The words from the kids and adults who share their experience
                keep us moving, “I have won a match with my siblings/parents by
                the way you’ve taught us, and I have won with my classmates by
                Joining Darklight.” Recently a student from Darklight Chess has
                won a tournament in Canada by Darklight Coaching. These are the
                things that keep us moving.
              </p>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <div
                  style={{
                    backgroundColor: "#2c3e50",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaUser style={{ color: "white", fontSize: "24px" }} />
                </div>
                <p
                  className="ms-3"
                  style={{
                    fontSize: "1.rem",
                    fontWeight: "bold",
                    color: "#2c3e50",
                    marginBottom: "0",
                  }}
                >
                  - Manikandan, Co-Founder Darklight
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#fff",
          zIndex: 1,
          padding: "4% 9%",
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-6">
            {" "}
            <img
              src={tournament}
              loading="lazy"
              alt="About Us"
              className="img-fluid rounded"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "5px",
              }}
            />
          </div>
          <div
            className="col-md-6"
            style={{ fontSize: "2rem", textAlign: "justify" }}
          >
            <h1
              className="fw-bolder pb-md-3 text-center"
              style={{ fontSize: "5rem" }}
            >
              Dark<span style={{ color: "red" }}>Light</span> Tournaments
            </h1>
            <p className="pb-md-3">
              Personally we believe in improving students skill through our
              Fellow academy tournaments to encourage them to learn from their
              flaws, we also conduct tournaments online.
            </p>
            <p className="pb-md-3">
              During the starting stages of Darklight, we were teaching our
              friends to win against their opponent and some their siblings and
              it was fun doing that but as days went we started coaching
              students from our home, to make chess accessible for all in a
              professional I started Darklight, this was a motivating factor to
              Develop a academy.
            </p>
            <p className="pb-md-3 text-center">
              Darklight welcomes students who are willing to master chess and
              also loves to teach every bit of learning in chess,{" "}
              <span
                className="fw-bolder"
                style={{ color: "red", display: "block" }}
              >
                BECAUSE EVERY MOVE MATTERS
              </span>
            </p>
            <p className="pb-md-3 text-center">
              We strongly believe that age is not a criteria to learn chess.
            </p>
          </div>
        </div>
      </div>

      <section className=" container py-5 border shadow">
        <div className="container">
          <h1 className="fw-bold display-4 text-center" style={{color:'red'}}>Contact Us</h1>
          <p className="text-center mb-4" style={{ fontSize: "1.5rem" }}>
            Please fill out the form below, and we'll get back to you soon.
          </p>
          <form onSubmit={handleSubmit} className="row g-4">
            <div className="form-group">
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
            <div className=" form-group">
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
            <div className=" form-group">
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
            <div className=" form-group">
              <select
                className="form-select floating-input form-control"
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
                className="btn text-white border-0"
                style={{
                  backgroundColor:'red',
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
