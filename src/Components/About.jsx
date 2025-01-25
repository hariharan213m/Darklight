import img1 from "../assets/img1.jpg";
import { FaUser } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Contact";

const About = () => {
  const sectionRef = useRef(null); // Ref for the section
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
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

  useEffect(() => {
    // Initialize AOS after component has mounted
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run the animation once
      mirror: false, // Do not mirror the animation when scrolling back
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${isVisible ? "fade-in-section" : "hidden-section"}`}
      style={{
        width: "100%",
        background: "#fff",
        paddingTop: "2.5rem",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#fff",
          zIndex: 1,
        }}
        data-aos="fade-up"
      >
        <div className="row justify-content-center">
          <div className="p-4" style={{ lineHeight: "1.8" }} data-aos="fade-up">
            <h1
              className="text-center mb-4 display-2 fw-bold"
              style={{ color: "red" }}
              data-aos="fade-down"
            >
              Welcome to Darklight Chess!
            </h1>
            <p
              className="lead text-dark"
              style={{ fontSize: "1.5rem" }}
              data-aos="fade-up"
            >
              At Darklight Chess Academy, located in Tamil Nadu, we offer
              professional chess coaching for players of all levels. Whether
              you're a beginner, intermediate, advanced, or even a master, our
              expert coaches are here to help you improve and elevate your game.
            </p>
            <p
              className="text-dark"
              style={{ fontSize: "1.5rem" }}
              data-aos="fade-up"
            >
              Currently, we have thriving coaching centers in{" "}
              <strong>Tamil Nadu, India</strong>, with over 70 students already
              benefiting from our programs. We also offer{" "}
              <strong>online chess coaching</strong> to make learning accessible
              from anywhere. Whether you're at home or on the go, mastering
              chess is just one step away! Book a{" "}
              <strong>free demo session</strong> today and experience the
              Darklight difference – at no cost!
            </p>
            <p
              className="text-dark"
              style={{ fontSize: "1.5rem" }}
              data-aos="fade-up"
            >
              Our team of highly skilled coaches includes{" "}
              <strong>Grandmasters</strong> and experienced chess professionals
              who are dedicated to helping you excel. At Darklight, you have the
              option to choose your own coach and work at your own pace.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid slide-in-section"
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#fff",
          zIndex: 1,
          padding: "6% 9%",
        }}
        // data-aos="fade-up" // Add a fade-up effect to the whole section
      >
        <div className="row">
          <div
            className="col-12 col-md-6 d-flex align-items-center justify-content-center"
            // data-aos="fade-right" // Fade-in effect from the right for the first column
          >
            <div
              className="card shadow rounded-4"
              style={{
                width: "100%",
                maxWidth: "500px",
                backgroundColor: "#f9f9f9",
                border: "none",
              }}
            >
              <img
                src={img1}
                alt="About Us"
                className="card-img-top rounded-top"
                style={{
                  height: "auto",
                  borderRadius: "0.5rem 0.5rem 0 0",
                }}
                data-aos="zoom-in" // Zoom-in effect for the image
              />
              <div className="card-body text-center">
                <h1
                  className="text-dark fw-bolder"
                  style={{ fontSize: "2.5rem", letterSpacing: "1px" }}
                  // data-aos="fade-down" // Fade-in effect from the top for the heading
                >
                  KARUPPASAMY
                </h1>
                <h4
                  className=" mb-4 fw-bold"
                  style={{ letterSpacing: ".5px", color: "green" }}
                  // data-aos="fade-up" // Fade-up effect for the subtitle
                >
                  CO-Founder Of Darklight
                </h4>
                <p
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    color: "red",
                    fontWeight: "bold",
                  }}
                  // data-aos="fade-up" // Fade-up effect for the quote
                >
                  "I strongly believe that chess is not only a game but a
                  lifestyle, and chess does not require an age factor to gain
                  knowledge."
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 text-center align-content-center"
            data-aos="fade-left" // Fade-in effect from the left for the second column
          >
            <p style={{ fontSize: "1.5rem", lineHeight: "1.8" }}>
              Darklight Chess academy was a dream for me, and I started it with
              an aim to empower chess coaches and explore the world of chess
              with a motive to take chess to all the people across the globe.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
        className="fade-in-bottom-section"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2
                className="display-2"
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                What Keeps Us Moving
              </h2>
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#7f8c8d",
                  lineHeight: "1.6",
                }}
              >
                The words from the kids and adults who share their experience
                keep us moving, “I have won a match with my siblings/parents by
                the way you’ve taught us, and I have won with my classmates by
                Joining Darklight.” Recently a student from Darklight Chess has
                won a tournament in Canada by Darklight Coaching. These are the
                things that keep us moving.
              </p>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <div
                  style={{
                    backgroundColor: "#2c3e50",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaUser style={{ color: "white", fontSize: "24px" }} />
                </div>
                <p
                  className="ms-3"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#2c3e50",
                    marginBottom: "0",
                  }}
                >
                  - Manikandan, Co-Founder Darklight
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default About;
