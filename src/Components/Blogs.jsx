import React from "react";

const Blogs = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff7eb3, #ff758c, #ff6a5e)",
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
          Writing...
        </h1>
        <p
          className="mt-3"
          style={{
            fontSize: "1.5rem",
            opacity: 0.9,
          }}
        >
          Stay tuned for something exciting!
        </p>
      </div>
    </div>
  );
};

export default Blogs;
