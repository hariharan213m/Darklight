import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "#001524",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex", // Flex layout for row
          justifyContent: "space-between",
          flexWrap: "wrap", // Allows wrapping on smaller screens
        }}
      >
        {/* Column 1: Logo and Description */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h2
            style={{ fontSize: "24px", color: "#f2a900", fontWeight: "bolder" }}
          >
            DarkLight
          </h2>
          <p>
            Join the ultimate chess community. Play, learn, and compete with
            players worldwide!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", color: "#f2a900" }}>Quick Links</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              lineHeight: "1.5",
              fontSize: "1.5rem",
            }}
          >
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Help Centre</p>
            </li>
            <li>
              <p>Business</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>

        {/* Column 3: About Us */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", color: "#f2a900" }}>About Us</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              lineHeight: "1.5",
              fontSize: "1.5rem",
            }}
          >
            <li>
              <p>Terms of Use</p>
            </li>
            <li>
              <p>Our Team</p>
            </li>
            <li>
              <p>How It Works</p>
            </li>
            <li>
              <p>Accessibility</p>
            </li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", color: "#f2a900" }}>Support</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              lineHeight: "1.5",
              fontSize: "1.5rem",
            }}
          >
            <li>
              <p>FAQs</p>
            </li>
            <li>
              <p>Terms & Conditions</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Career</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ borderColor: "#555", margin: "20px 0" }} />

      {/* Bottom Section */}
      <p style={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} DarkLight. All Rights Reserved. |
        <a href="/privacy" style={{ color: "#f2a900", textDecoration: "none" }}>
          {" "}
          Privacy Policy
        </a>{" "}
        |
        <a href="/terms" style={{ color: "#f2a900", textDecoration: "none" }}>
          {" "}
          Terms of Service
        </a>
      </p>
    </div>
  );
};

export default Footer;
