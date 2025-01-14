import React from "react";
import tournament from "../assets/Tabs.jpg";
import { useEffect, useState } from "react";
const Tournaments = () => {
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
        threshold: 0.5,
      }
    );

    const section = document.getElementById("about-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return (
    <section
      id="about-section"
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        zIndex: 1,
        padding: "4% 9%",
        transition: "opacity 1s ease-out, transform 1s ease-out", // Add smooth transition
        opacity: isInView ? 1 : 0, // Set opacity for fade-in effect
        transform: isInView ? "translateY(0)" : "translateY(50px)", // Slide in from below
      }}
    >
      <div className="row align-items-center">
        <div
          className="col-md-6"
          style={{
            transition: "transform 1s ease-out",
            transform: isInView ? "scale(1)" : "scale(0.9)", // Add zoom effect for the image
          }}
        >
          <img
            src={tournament}
            loading="lazy"
            alt="About Us"
            className="img-fluid rounded"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          className="col-md-6"
          style={{
            fontSize: "1.5rem",
            opacity: isInView ? 1 : 0, // Fade-in text
            transform: isInView ? "translateX(0)" : "translateX(50px)", // Slide-in from the side
            transition: "opacity 1s ease-out, transform 1s ease-out", // Add smooth transition
          }}
        >
          <h1 className="fw-bolder pb-md-3 text-center display-2">
            Dark<span style={{ color: "red" }}>Light</span> Tournaments
          </h1>
          <p className="pb-md-3">
            Personally we believe in improving students skill through our Fellow
            academy tournaments to encourage them to learn from their flaws, we
            also conduct tournaments online.
          </p>
          <p className="pb-md-3">
            During the starting stages of Darklight, we were teaching our
            friends to win against their opponent and some their siblings and it
            was fun doing that but as days went we started coaching students
            from our home, to make chess accessible for all in a professional I
            started Darklight, this was a motivating factor to Develop a
            academy.
          </p>
          <p className="pb-md-3 ">
            Darklight welcomes students who are willing to master chess and also
            loves to teach every bit of learning in chess,{" "}
            <span className="fw-bolder" style={{ color: "red" }}>
              BECAUSE EVERY MOVE MATTERS
            </span>
          </p>
          <p className="pb-md-3 ">
            We strongly believe that age is not a criteria to learn chess.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
