import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

const OnlineClasses = () => {
  const sectionRef = useRef(null); // Ref for the section
  const [isVisible, setIsVisible] = useState(false); // State for animation trigger

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
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
    <section
      ref={sectionRef}
      id="courses"
      className={`container d-flex align-items-center rounded-5 ${
        isVisible ? "animate-section" : "hidden-section"
      }`}
      style={{
        paddingTop: "5rem",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      <div className="row justify-content-center w-100 flex-wrap">
        {/* Title */}
        <div className="row w-100">
          <div
            className={`col text-center pb-5 ${
              isVisible ? "fade-up" : "hidden"
            }`}
            style={{ fontFamily: "'Bodoni', serif" }}
          >
            <h1
              className="fw-bold display-2"
              style={{
                color: "#009E60",
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
          {/* Individual Class */}
          <div
            className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center ${
              isVisible ? "fade-in-card" : "hidden-card"
            }`}
          >
            <div
              className="card border-0"
              style={{
                width: "100%",
                maxWidth: "370px",
                borderRadius: "20px",
                background:
                  "linear-gradient(to bottom right, #ffffff, #e3f2fd)",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(128, 0, 128, 0.5)",
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#8424d9",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginTop: "-30px",
                  boxShadow: "0 4px 12px rgba(128, 0, 128, 0.5)",
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
                  If you’re a individual who is interested and willing to learn
                  chess and explore into the field of chess, you should check
                  this out to learn chess, we will analyse and assess you in
                  every possible ways to improve your skills, we promise you
                  that we will show progress in your chess career.
                </p>
              </div>
            </div>
          </div>

          {/* Group Class */}
          <div
            className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center ${
              isVisible ? "fade-in-card" : "hidden-card"
            }`}
          >
            <div
              className="card border-0"
              style={{
                width: "100%",
                maxWidth: "370px",
                borderRadius: "20px",
                background:
                  "linear-gradient(to bottom right, #ffffff, #e3f2fd)",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 123, 255, 0.5)",
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#3366cc",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginTop: "-30px",
                  boxShadow: "0 4px 12px rgba(0, 123, 255, 0.5)",
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
                  Darklight offers Group Classes for students, Group Classes has
                  been fun learning because you can learn from your chess mates
                  who are joining to learn, you can improve your skills with a
                  group of students like you, and compared to individual
                  classes, group classes are affordable so that you can learn
                  chess.
                </p>
              </div>
            </div>
          </div>

          {/* Sibling Class */}
          <div
            className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center ${
              isVisible ? "fade-in-card" : "hidden-card"
            }`}
          >
            <div
              className="card border-0"
              style={{
                width: "100%",
                maxWidth: "370px",
                borderRadius: "20px",
                background:
                  "linear-gradient(to bottom right, #ffffff, #e3f2fd)",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 128, 0, 0.5)",
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#007b83",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginTop: "-30px",
                  boxShadow: "0 4px 12px rgba(0, 255, 0, 0.5)",
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
                  you can collaborate with your sibling or your cousin, you can
                  explore more about the world of chess with your sibling so
                  called partner in crime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineClasses;
