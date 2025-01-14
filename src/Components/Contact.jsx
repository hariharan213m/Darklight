import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
const Contact = () => {
  const { formData, handleChange, handleSubmit } = useContext(DataContext);
  return (
    <section className="container my-5 border shadow fade-in-bottom-section">
      <div className="container">
        <h1 className="fw-bold display-2 text-center" style={{ color: "red" }}>
          Get in Touch
        </h1>
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
              style={{ fontSize: "1.5rem", padding: "8px", letterSpacing: 1 }}
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn text-white border-0"
              style={{
                backgroundColor: "red",
                fontSize: "1.5rem",
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
  );
};

export default Contact;
