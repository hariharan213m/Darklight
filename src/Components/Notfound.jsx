import React from "react";

const Notfound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <a href="/" style={{ textDecoration: "none", color: "blue" }}>
        Go Back to Home
      </a>
    </div>
  );
};

export default Notfound;
