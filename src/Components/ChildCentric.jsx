import React, { useState, useEffect } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import { FaChess } from "react-icons/fa";
import kidChess from "../assets/kid.jpg";
import { FaChild } from "react-icons/fa";

const ChildCentric = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.3, 
      }
    );

    const section = document.getElementById("child-centric-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="child-centric-section"
      className="align-content-center"
      style={{
        fontFamily: '"Bodoni", serif',
        padding: "4% 9%",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <div className="container text-center pb-5">
        <h2
          className="fw-bold display-2 text-primary"
          style={{
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <FaChild className="me-2" /> Child Centric
        </h2>
        <p
          className="lead text-muted"
          style={{
            fontSize: "1.5rem",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          We prioritize your child’s development and engagement through
          structured chess activities.
        </p>
      </div>

      <div className="container row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12">
          {/* Animated Features */}
          <div
            className="h-100 d-flex border-0"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <div className="d-flex align-items-center">
              <div
                className="icon text-primary me-5"
                style={{ fontSize: "3.5rem", marginBottom: "5rem" }}
              >
                <FaUserTie />
              </div>
              <div>
                <h5
                  className="mb-2 text-uppercase fw-bold"
                  style={{ fontSize: "2rem" }}
                >
                  Trained & Experienced Staff
                </h5>
                <p style={{ fontSize: "1.5rem" }}>
                  Our coaches are certified professionals dedicated to your
                  child's growth.
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-100 d-flex border-0"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out 0.2s",
            }}
          >
            <div className="d-flex align-items-center">
              <div
                className="icon text-primary me-5"
                style={{ fontSize: "3.5rem", marginBottom: "5rem" }}
              >
                <FaChessKing />
              </div>
              <div>
                <h5
                  className="mb-2 text-uppercase fw-bold"
                  style={{ fontSize: "2rem" }}
                >
                  Engaging Playful Activity
                </h5>
                <p style={{ fontSize: "1.5rem" }}>
                  Interactive sessions to keep children excited and curious
                  about chess.
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-100 d-flex border-0"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out 0.4s",
            }}
          >
            <div
              className="d-flex align-items-center"
              style={{ lineHeight: "2" }}
            >
              <div
                className="icon text-primary me-5"
                style={{ fontSize: "3.5rem", marginBottom: "5rem" }}
              >
                <FaChess />
              </div>
              <div>
                <h5
                  className="mb-2 text-uppercase fw-bold"
                  style={{ fontSize: "2rem" }}
                >
                  Child Friendly
                </h5>
                <p style={{ fontSize: "1.5rem" }}>
                  A safe, fun environment tailored for young learners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="col-md-6 d-flex justify-content-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateX(0)" : "translateX(50px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <img
            src={kidChess}
            alt="Child Centric"
            loading="lazy"
            className="img-fluid rounded-4"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ChildCentric;
