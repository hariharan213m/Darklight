import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const AnimatedText = () => {
  useEffect(() => {
    const words = document.querySelectorAll(".animated-word");
    words.forEach((word, index) => {
      word.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div
      style={{
        color: "#ffcc00",
      }}
      className="d-flex justify-content-center align-items-center mt-5"
    >
      <div className="text-center">
        <h1 className="text-animation display-6 responsive-text">
          <span className="animated-word">Best</span>
          <span className="animated-word">Online</span>
          <span className="animated-word">Professional</span>
          <span className="animated-word">Chess</span>
          <span className="animated-word">Coaching</span>
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;
