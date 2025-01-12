import React from "react";

const Gallery = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          className="fw-bold"
          style={{
            fontSize: "4rem",
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          Taking Photos...
        </h1>
        <p
          className="mt-3"
          style={{
            fontSize: "1.5rem",
            opacity: 0.9,
          }}
        >
          Our gallery is coming soon. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Gallery;
