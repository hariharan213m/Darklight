import React, { useEffect, useState } from "react";
import { FaUsers, FaGlobe, FaUserGraduate, FaChessKing } from "react-icons/fa";
import CountUp from "react-countup";

const Progress = () => {
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer to detect when the section comes into view
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
        threshold: 0.5, // The percentage of the element's visibility before triggering
      }
    );

    const section = document.getElementById("progress-section");
    if (section) observer.observe(section);

    // Clean up observer on component unmount
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="progress-section"
      className="container px-5 my-5 d-flex flex-column justify-content-center"
      style={{
        backgroundColor: "#f0f8ff", // Ice blue background
        paddingBottom: "5rem",
      }}
    >
      <div className="row g-5 justify-content-evenly">
        {/* Clients Card */}
        <div
          className="col-6 col-sm-6 col-lg-3 text-center fade-in progress-card"
          style={{
            animationDelay: "0s",
          }}
        >
          <div
            className="p-4 rounded-3 shadow-lg progress-box card-hover"
            style={{
              background: "linear-gradient(135deg, #4e73df, #2a5298)", // Blue gradient
              border: "1px solid #ccc", // Subtle border for a professional feel
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for depth
            }}
          >
            <FaUsers size={60} color="#fff" />
            <h1 className="text-white fw-bolder display-2">
              {isInView ? <CountUp start={0} end={80} duration={2} /> : "0"}+
            </h1>
            <h3 className="text-white">Clients</h3>
          </div>
        </div>

        {/* Countries Card */}
        <div
          className="col-6 col-sm-6 col-lg-3 text-center fade-in progress-card"
          style={{
            animationDelay: "0.2s",
          }}
        >
          <div
            className="p-4 rounded-3 shadow-lg progress-box card-hover"
            style={{
              background: "linear-gradient(135deg, #ff6f61, #e04f3f)", // Coral gradient
              border: "1px solid #ccc", // Neutral border
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaGlobe size={60} color="#fff" />
            <h1 className="text-white fw-bolder display-2">
              {isInView ? <CountUp start={0} end={8} duration={2} /> : "0"}+
            </h1>
            <h3 className="text-white">Countries</h3>
          </div>
        </div>

        {/* Students Enrolled Card */}
        <div
          className="col-6 col-sm-6 col-lg-3 text-center fade-in progress-card"
          style={{
            animationDelay: "0.4s",
          }}
        >
          <div
            className="p-4 rounded-3 shadow-lg progress-box card-hover"
            style={{
              background: "linear-gradient(135deg, #1cc88a, #17a46d)", // Green gradient
              border: "1px solid #ccc", // Neutral border
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaUserGraduate size={60} color="#fff" />
            <h1 className="text-white fw-bolder display-2">
              {isInView ? <CountUp start={0} end={500} duration={2} /> : "0"}+
            </h1>
            <h3 className="text-white">Students Enrolled</h3>
          </div>
        </div>

        {/* Chess Coaches Card */}
        <div
          className="col-6 col-sm-6 col-lg-3 text-center fade-in progress-card"
          style={{
            animationDelay: "0.6s",
          }}
        >
          <div
            className="p-4 rounded-3 shadow-lg progress-box card-hover"
            style={{
              background: "linear-gradient(135deg, #f39c12, #f1a60e)", // Golden Yellow gradient
              border: "1px solid #ccc", // Neutral border
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaChessKing size={60} color="#fff" />
            <h1 className="text-white fw-bolder display-2">
              {isInView ? <CountUp start={0} end={25} duration={2} /> : "0"}+
            </h1>
            <h3 className="text-white">Chess Coaches</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
