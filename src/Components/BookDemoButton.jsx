import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const BookDemoButton = () => {
  const {
    handleShow,
    showModal,
    handleClose,
    formData,
    handleChange,
    handleSubmit,
  } = useContext(DataContext);
  return (
    <div
      id="book-demo-button"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: 1000,
      }}
    >
      <button
        className="btn d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#ffcc00",
          color: "white",
          borderRadius: "50px",
          padding: "10px 20px",
          boxShadow: "0 4px 6px rgba(255, 204, 0, 0.5)",
          fontSize: "1.5rem",
        }}
        onClick={handleShow}
      >
        <span style={{ marginRight: "8px", marginBottom: "4px" }}>
          <FaCalendarAlt />
        </span>
        Book a Demo
      </button>
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
  );
};

export default BookDemoButton;
