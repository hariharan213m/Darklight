import React from "react";
import playBots from "../assets/19198019.jpg";
import LazyLoad from "react-lazyload";
import BgEvent from "../assets/BgEvent.jpg";

const Events = () => {
  return (
    <div
      className="container align-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row justify-content-center">
        <div className="d-none d-md-block col-12 col-md-6 col-lg-6 mb-4 d-flex justify-content-center">
          <LazyLoad height={300} offset={100}>
            <img
              src={BgEvent}
              loading="lazy"
              style={{
                height: "710px",
                width: "550px",
              }}
            />
          </LazyLoad>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg border-0"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "20px",
              background: "linear-gradient(to bottom right, #ffffff, #fbeaff)",
            }}
          >
            <LazyLoad height={300} offset={100}>
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
            </LazyLoad>
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
