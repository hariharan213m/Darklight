import React from "react";
import { useState } from "react";

const Levels = () => {
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

    const whatsappMessage = `Name: ${formData.name}\nContact No: ${contactNo}\nMode: ${mode}\nLevel: ${level}\nLocation: ${location}`;
    const phoneNumber = "918300155259";
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
      className="container-fluid"
      style={{
        background: "#001524",
      }}
    >
      <div className="row justify-content-center g-4">
        <div className="row ">
          <div
            className="col text-center pb-5"
            style={{ fontFamily: "'Bodoni', serif", lineHeight: "3" }}
          >
            <h1
              className="fw-bold text-uppercase"
              style={{
                color: "#3366cc",
                fontSize: "4rem",
                fontFamily: "'Bodoni', serif",
                letterSpacing: "1px",
              }}
            >
              Chess Course Categories
            </h1>
            <p className="lead text-light" style={{ fontSize: "2rem" }}>
              Choose a course that suits your level and goals. From the
              fundamentals to advanced tactics, we have something for everyone.
            </p>
          </div>
        </div>

        <div
          className="col-12 col-md-5 me-3 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "350px",
            background:
              "linear-gradient(45deg, rgba(255, 140, 0, 0.7), rgba(255, 165, 0, 0.5))",
            color: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h2
            className="text-light fw-bold text-uppercase mb-3"
            style={{ fontSize: "3rem", letterSpacing: "2px" }}
          >
            Beginner
          </h2>
          <p
            className="text-light mb-4"
            style={{ fontSize: "1.5rem", maxWidth: "600px" }}
          >
            Start your chess journey by mastering basic moves and strategies.
          </p>
          <button
            className="btn btn-outline-light"
            style={{
              fontSize: "1.3rem",
              padding: "10px 30px",
              borderRadius: "30px",
            }}
            onClick={handleShow}
          >
            Book Now
          </button>
        </div>

        <div
          className="col-12 col-md-5 ms-3 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "350px",
            background:
              "linear-gradient(45deg, rgba(0, 255, 255, 0.7), rgba(0, 204, 255, 0.5))",
            color: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h2
            className="text-light fw-bold text-uppercase mb-3"
            style={{ fontSize: "3rem", letterSpacing: "2px" }}
          >
            Intermediate
          </h2>
          <p
            className="text-light mb-4"
            style={{ fontSize: "1.5rem", maxWidth: "600px" }}
          >
            Enhance your skills with a deeper understanding of tactics and
            strategies.
          </p>
          <button
            onClick={handleShow}
            className="btn btn-outline-light"
            style={{
              fontSize: "1.3rem",
              padding: "10px 30px",
              borderRadius: "30px",
            }}
          >
            Book Now
          </button>
        </div>

        <div
          className="col-12 col-md-5 me-3 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "350px",
            background:
              "linear-gradient(45deg, rgba(255, 0, 0, 0.7), rgba(204, 0, 0, 0.5))",
            color: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h2
            className="text-light fw-bold text-uppercase mb-3"
            style={{ fontSize: "3rem", letterSpacing: "2px" }}
          >
            Advanced
          </h2>
          <p
            className="text-light mb-4"
            style={{ fontSize: "1.5rem", maxWidth: "600px" }}
          >
            Refine your skills and learn advanced strategies to master the game.
          </p>
          <button
            onClick={handleShow}
            className="btn btn-outline-light"
            style={{
              fontSize: "1.3rem",
              padding: "10px 30px",
              borderRadius: "30px",
            }}
          >
            Book Now
          </button>
        </div>

        <div
          className="col-12 col-md-5 ms-3 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "350px",
            background:
              "linear-gradient(45deg, rgba(255, 215, 0, 0.7), rgba(255, 193, 0, 0.5))",
            color: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h2
            className="text-light fw-bold text-uppercase mb-3"
            style={{ fontSize: "3rem", letterSpacing: "2px" }}
          >
            Master
          </h2>
          <p
            className="text-light mb-4"
            style={{ fontSize: "1.5rem", maxWidth: "600px" }}
          >
            Master deep strategies and improve your decision-making for
            competitive play.
          </p>
          <button
            onClick={handleShow}
            className="btn btn-outline-light"
            style={{
              fontSize: "1.3rem",
              padding: "10px 30px",
              borderRadius: "30px",
            }}
          >
            Book Now
          </button>
        </div>

        <div
          className="col-12 col-md-5 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "350px",
            background:
              "linear-gradient(45deg, rgba(128, 0, 128, 0.7), rgba(75, 0, 130, 0.5))",
            color: "#fff",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h2
            className="text-light fw-bold text-uppercase mb-3"
            style={{ fontSize: "3rem", letterSpacing: "2px" }}
          >
            Grandmaster
          </h2>
          <p
            className="text-light mb-4"
            style={{ fontSize: "1.5rem", maxWidth: "600px" }}
          >
            Achieve the pinnacle of chess mastery and compete at the highest
            level of play.
          </p>
          <button
            onClick={handleShow}
            className="btn btn-outline-light"
            style={{
              fontSize: "1.3rem",
              padding: "10px 30px",
              borderRadius: "30px",
            }}
          >
            Book Now
          </button>
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
      </div>
    </section>
  );
};

export default Levels;
