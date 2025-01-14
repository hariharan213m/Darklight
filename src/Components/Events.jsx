import React, { useEffect, useRef, useState } from "react";
import playBots from "../assets/19198019.jpg";
import LazyLoad from "react-lazyload";
import BgEvent from "../assets/BgEvent.jpg";

const Events = () => {
  const sectionRef = useRef(null); // Ref for the section
  const [isVisible, setIsVisible] = useState(false); // State for triggering animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`container align-content-center ${
        isVisible ? "animate-section" : "hidden-section"
      }`}
      style={{
        minHeight: "100vh",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      <div className="row justify-content-center">
        {/* Left Image */}
        <div
          className={`d-none d-md-block col-12 col-md-6 col-lg-6 mb-4 d-flex justify-content-center ${
            isVisible ? "fade-in-left" : "hidden-left"
          }`}
        >
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

        {/* Card */}
        <div
          className={`col-12 col-sm-6 col-md-6 col-lg-6 mb-4 d-flex justify-content-center align-items-center ${
            isVisible ? "fade-in-right" : "hidden-right"
          }`}
        >
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
