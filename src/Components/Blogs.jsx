import React from "react";
import { useState } from "react";

const Blogs = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const contactNo = formData.get("contactNo");
    const mode = formData.get("mode");
    const level = formData.get("level");
    const location = formData.get("location");

    // Log form data or perform other actions
    console.log("Name:", name);
    console.log("Contact Number:", contactNo);
    console.log("Mode (Online/Offline):", mode);
    console.log("Level:", level);
    console.log("Location:", location);

    // Close the modal after submission
    handleClose();
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      {/* Button to trigger modal */}
      <button className="btn btn-primary" onClick={handleShow}>
        Open Form
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactNo" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contactNo"
                      name="contactNo"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mode" className="form-label">
                      Mode (Online/Offline)
                    </label>
                    <select
                      className="form-select"
                      id="mode"
                      name="mode"
                      required
                    >
                      <option value="" disabled selected>
                        Choose mode
                      </option>
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="level" className="form-label">
                      Choose a Level
                    </label>
                    <select
                      className="form-select"
                      id="level"
                      name="level"
                      required
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
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      placeholder="Enter your location"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
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

export default Blogs;
