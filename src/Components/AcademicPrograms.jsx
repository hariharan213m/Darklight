import React, { useEffect, useRef, useState } from "react";
import { FaChild, FaChess } from "react-icons/fa";

const AcademicPrograms = () => {
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
      className={`container py-5 mb-5 rounded-5 ${
        isVisible ? "animate-section" : "hidden-section"
      }`}
      style={{
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      {/* Title */}
      <div className="container text-center mb-5">
        <h1
          className={`fw-bold display-2 text-success ${
            isVisible ? "fade-up" : "hidden"
          }`}
        >
          Our Academic <span className="text-warning">Programs</span>
        </h1>
        <p
          className={`text-dark ${isVisible ? "fade-up" : "hidden"}`}
          style={{ fontSize: "1.5rem", transitionDelay: "0.2s" }}
        >
          Tailored courses for every age group, from children to adults.
        </p>
      </div>

      {/* Cards */}
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {/* Children Card */}
          <div
            className={`col-md-6 col-lg-6 col-sm-6 ${
              isVisible ? "fade-in-card" : "hidden-card"
            }`}
          >
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
                    className="mb-2 text-uppercase fw-bold"
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

          {/* Adults Card */}
          <div
            className={`col-md-6 col-lg-6 col-sm-6 ${
              isVisible ? "fade-in-card" : "hidden-card"
            }`}
          >
            <div className="h-100 d-flex border-0">
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
                    Courses for adults looking to enhance their competitive edge
                    in chess.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Paragraph */}
      <div className="container text-center">
        <p
          className={`lead mx-auto text-dark ${
            isVisible ? "fade-up" : "hidden"
          }`}
          style={{
            maxWidth: "800px",
            fontSize: "1.5rem",
            transitionDelay: "0.3s",
          }}
        >
          In Dark Light, we encourage both individual and group classes. Join a
          group of chess buddies to learn together, or opt for personalized
          one-on-one coaching sessions for a tailored experience.
        </p>
      </div>
    </section>
  );
};

export default AcademicPrograms;
