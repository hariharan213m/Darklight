import React from "react";
import playBots from "../assets/19198019.jpg";

const Events = () => {
  return (
    <div
      className="container align-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-6 mb-4 d-flex justify-content-center">
          <div
            className="card shadow-lg border-0"
            style={{
              width: "100%",
              maxWidth: "900px",
              borderRadius: "20px",
              background: "linear-gradient(to bottom right, #ffffff, #fbeaff)",
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
                Stay updated with the latest chess tournaments, workshops, and
                training camps. Register now to enhance your skills and compete
                with the best!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
