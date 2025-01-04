import React from "react";
import courseImg from "../assets/6592321.jpg";
import { useState } from "react";
const DemoClass = () => {
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
    handleClose();
    e.target.reset();

    console.log("Submitting Form Data:", formData); // Log the form data
    const { name, contactNo, mode, level, location } = formData;

    // Validate required fields
    if (!name || !contactNo || !mode || !level || !location) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `Name: ${formData.name}\nContact No: ${contactNo}\nMode: ${mode}\nLevel: ${level}\nLocation: ${location}`;
    const phoneNumber = "918124482421"; // Use the international format without spaces or special characters
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp link
    window.open(whatsappLink, "_blank");

    // Reset the form data
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
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        zIndex: 1,
        padding: "4% 9%",
      }}
    >
      {/* Title */}
      <h1 className="fw-bold display-2 my-5 text-center">
        Book A Free Demo Class
      </h1>
      <div className="row justify-content-center">
        <div
          className=" shadow rounded-4 p-3"
          style={{
            maxWidth: "1200px",
            backgroundColor: "#f9f9f9",
            border: "none",
          }}
        >
          <div className="row g-0 align-items-center">
            {/* Left Image Section */}
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={courseImg}
                alt="About Us"
                className="img-fluid rounded-start"
                loading="lazy"
                style={{
                  width: "80%",
                  height: "auto",
                  borderRadius: "0.5rem 0 0 0.5rem", // Rounded corners for the left side
                }}
              />
            </div>

            {/* Right Content Section */}
            <div className="col-md-6">
              <p
                className="mb-4"
                style={{ fontSize: "1.5rem", lineHeight: "1.8" }}
              >
                Book a free demo to get to know about our Darklight coaching and
                to assess levels in chess. Whether you're a beginner,
                intermediate, or advanced player, our coaches have plans to
                teach you. Ready for an adventure in Chess? Join our free demo
                to explore the world of chess.
              </p>
              <p style={{ fontSize: "1.5rem", lineHeight: "1.8" }}>
                Plus, connect with like-minded chess enthusiasts in a vibrant
                and supportive community that shares your passion for the game.
              </p>

              {/* Button */}
              <div className="mt-4">
                <button
                  className="btn btn-primary fw-bold rounded-4"
                  onClick={handleShow}
                  style={{
                    fontSize: "1.2rem",
                    padding: "0.8rem 2rem",
                  }}
                >
                  Book A Demo
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
  );
};

export default DemoClass;
