import React from "react";
import tournament from "../assets/Tabs.jpg";
import { FaChild } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChess } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import kidChess from "../assets/kid.jpg";
import { useState } from "react";
import about1 from "../assets/About1.jpg";
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
        background: "#001524",
        paddingTop: "2rem",
      }}
    >
      {/* <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "rgb(255, 245, 238)",
          zIndex: 1,
          padding: "2% 9%",
        }}
      >
        <div className="row align-items-center">
         
          <div className="col-md-6">
            <h1 className="text-dark fw-bolder" style={{ fontSize: "4rem" }}>
              About Us
            </h1>
            <p style={{ fontSize: "1.7rem", lineHeight: "1.8" }}>
              Darklight Chess academy was a dream for me and I started it with a
              aim to empower chess coaches and explore the world of chess with a
              motive to take chess to all the people across the globe.
            </p>
            <p style={{ fontSize: "1.7rem", lineHeight: "1.8" }}>
              I strongly believe that chess is not only a game but a lifestyle,
              and chess does not require a age factor to gain knowledge.
            </p>
          </div>


          <div className="col-md-6 text-center">
            <img
              src={about1}
              alt="About Us"
              className="img-fluid rounded"
              style={{
                maxWidth: "80%",
                height: "auto",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "rgb(255, 245, 238)",
          zIndex: 1,
          padding: "2% 9%",
        }}
      >
        <div className="row align-items-center">
        
          <div className="col-md-6 text-center">
            <img
              src={about1}
              alt="About Us"
              className="img-fluid rounded"
              style={{
                maxWidth: "80%",
                height: "auto",
                borderRadius: "5px",
              }}
            />
          </div>
         

          <div className="col-md-6">
            <h1 className="text-dark fw-bolder" style={{ fontSize: "4rem" }}>
              WHAT KEEPS US MOVING
            </h1>
            <p style={{ fontSize: "1.7rem", lineHeight: "1.8" }}>
              The words from the kids and adults who share their experience
              keeps us moving, “I have won a match with my Siblings/Parents by
              the way you’ve taught us, and I have won with my classmates by
              Joining Darklight”. Recently a student from Darklight Chess has
              won a tournament in Canada by Darklight Coaching, These are the
              Things that keep us moving.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "rgb(255, 245, 238)",
          zIndex: 1,
          padding: "2% 9%",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.7rem" }}>
          Darklight Chess Academy is a Tamil Nadu based Chess Academy offering
          professional coaching for all the people no matter if your you’re a
          beginner or intermediate advanced or master, we train you in the place
          you lack behind, We Coach you with professionals to make you game
          professional.
        </p>
        <p style={{ fontSize: "1.7rem" }}>
          So far we have our Chess Coaching running at Kovilpatti and
          Thoothukudi, 40+ Students in Thoothukudi and 30+ in kovilpatti,
        </p>
        <p style={{ fontSize: "1.7rem" }}>
          Yet we also provide Chess Coaching online, you can master chess from
          where you are, It’s just one step away, Book a free demo & get to know
          about our Darklight Chess Coaching and us and master chess from
          wherever you are, It cost you nothing to try a free demo.
        </p>
        <p style={{ fontSize: "1.7rem" }}>
          Darklight Chess has many coaches at the backend to train and uplift
          the upcoming generation to learn chess, we have grandmasters and
          coaches who are experienced in chess field, you have option of
          selecting your chess coaches by yourselves.
        </p>
      </div> */}

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
                className="btn btn-primary"
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
