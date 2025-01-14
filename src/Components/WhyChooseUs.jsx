import React, { useState, useEffect } from "react";
import {
  FaChessKnight,
  FaChalkboardTeacher,
  FaTrophy,
  FaLightbulb,
} from "react-icons/fa";
const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaChessKnight />,
      title: "Expert Coaching",
      description:
        "Learn from top-rated chess coaches with years of experience.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Interactive Lessons",
      description:
        "Engaging lessons designed to improve your skills at any level.",
    },
    {
      icon: <FaTrophy />,
      title: "Tournament Preparation",
      description:
        "Get ready for competitive tournaments with tailored training.",
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Thinking",
      description: "Develop problem-solving and strategic thinking skills.",
    },
  ];

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

    const section = document.getElementById("why-choose-us");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);


  return (
    <section
      id="why-choose-us"
      className="container my-5"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <h1
        className="text-center mb-4 fw-bolder display-2"
        style={{
          transition: "opacity 1s ease-out, transform 1s ease-out",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        Why Choose Us?
      </h1>

      <div className="row g-4 justify-content-center">
        {features.map((feature, index) => (
          <div
            className="col-md-6 col-lg-6 col-sm-6"
            key={index}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : `translateY(${50 + index * 20}px)`,
              transition: `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`,
            }}
          >
            <div className="card h-100 d-flex border-0">
              <div className="d-flex align-items-center card-body">
                <div
                  className="icon text-primary me-5 mb-5"
                  style={{ fontSize: "3.5rem" }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h5
                    className="card-title mb-2 text-uppercase fw-bold"
                    style={{ fontSize: "2rem" }}
                  >
                    {feature.title}
                  </h5>
                  <p className="card-text" style={{ fontSize: "1.5rem" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

};

export default WhyChooseUs;
