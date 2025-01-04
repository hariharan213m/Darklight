import React from "react";
import onlineClass from "../assets/rb_6428.png";
import playBots from "../assets/19198019.jpg";
import offlineClass from "../assets/5385181.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaUsers, FaChild, FaChess } from "react-icons/fa";

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
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

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, contactNo, mode, level, location } = formData;

    // Validate required fields
    if (!name || !contactNo || !mode || !level || !location) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `Name: ${name}\nContact No: ${contactNo}\nMode: ${mode}\nLevel: ${level}\nLocation: ${location}`;
    const phoneNumber = "918124482421"; // Use the international format without spaces or special characters
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");

    // Reset form data and close the modal only after the link is opened
    setFormData({
      name: "",
      contactNo: "",
      mode: "",
      level: "",
      location: "",
    });

    handleClose(); // Close the modal after form submission
  };

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
                  loading="lazy"
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
                  loading="lazy"
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
                    Stay updated with the latest chess tournaments, workshops,
                    and training camps. Register now to enhance your skills and
                    compete with the best!
                  </p>
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
      <section
        id="courses"
        className="container d-flex align-items-center rounded-5"
        style={{
          paddingTop: "5rem", // Added padding for spacing
        }}
      >
        <div className="row justify-content-center w-100 flex-wrap">
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
                Online Classes
              </h1>
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
                    "linear-gradient(to bottom right, #ffffff, #e3f2fd)",
                  overflow: "hidden", // Ensures the card's rounded corners work on all elements
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", // More pronounced shadow
                }}
                // Adding a hover effect
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {/* Icon with circle background */}
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#8424d9",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginTop: "-30px", // To position the icon above the card
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <FaUser size={30} color="#ffffff" />
                </div>

                <div className="card-body text-center pt-4">
                  <h5
                    className="card-title fw-bolder"
                    style={{
                      color: "#8424d9",
                      fontSize: "2.5rem",
                      letterSpacing: "1px",
                      marginBottom: "1rem",
                    }}
                  >
                    Individual Class
                  </h5>
                  <p
                    className="card-text text-secondary"
                    style={{
                      fontSize: "1.4rem",
                      lineHeight: "1.6",
                      color: "#555",
                      marginBottom: "1.5rem",
                    }}
                  >
                    If you’re an individual who is interested and willing to
                    learn chess and explore into the field of chess, you should
                    check this out to learn chess. We will analyze and assess
                    you in every possible way to improve your skills. We promise
                    that we will show progress in your chess career.
                  </p>
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
                  overflow: "hidden",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", // More pronounced shadow
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {/* Icon with circle background */}
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#3366cc",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginTop: "-30px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <FaUser size={30} color="#ffffff" />
                </div>

                <div className="card-body text-center pt-4">
                  <h5
                    className="card-title fw-bolder"
                    style={{
                      color: "#3366cc",
                      fontSize: "2.5rem",
                      letterSpacing: "1px",
                      marginBottom: "1rem",
                    }}
                  >
                    Group Class
                  </h5>
                  <p
                    className="card-text text-secondary"
                    style={{
                      fontSize: "1.4rem",
                      lineHeight: "1.6",
                      color: "#555",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Darklight offers Group Classes for students, Group Classes
                    has been fun learning because you can learn from your chess
                    mates who are joining to learn, you can improve your skills
                    with a group of students like you, and compared to
                    individual classes, group classes are affordable so that you
                    can learn chess.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
              <div
                className="card shadow-lg border-0"
                style={{
                  width: "100%",
                  maxWidth: "370px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(to bottom right, #ffffff, #e3f2fd)",
                  overflow: "hidden",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {/* Icon with circle background */}
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#007b83",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginTop: "-30px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <FaUser size={30} color="#ffffff" />
                </div>

                <div className="card-body text-center pt-4">
                  <h5
                    className="card-title fw-bolder"
                    style={{
                      color: "#007b83",
                      fontSize: "2.5rem",
                      letterSpacing: "1px",
                      marginBottom: "1rem",
                    }}
                  >
                    Sibling Class
                  </h5>
                  <p
                    className="card-text text-secondary"
                    style={{
                      fontSize: "1.4rem",
                      lineHeight: "1.6",
                      color: "#555",
                      marginBottom: "1.5rem",
                    }}
                  >
                    In this category, we encourage siblings to learn chess
                    together so that you can develop your skills altogether your
                    are benefited with skills and sibling classes has discounts,
                    you can collaborate with your sibling or your cousin, you
                    can explore more about the world of chess with your sibling
                    so called partner in crime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      Courses for adults looking to enhance their competitive
                      edge in chess.
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
            In Dark Light, we encourage both individual and group classes. Join
            a group of chess buddies to learn together, or opt for personalized
            one-on-one coaching sessions for a tailored experience.
          </p>
        </div>
      </section>
    </>
  );
};

export default Courses;
