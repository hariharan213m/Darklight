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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Column 1: Logo and Description */}
          <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "24px", color: "#f2a900" }}>ChessMaster</h2>
            <p>
              Join the ultimate chess community. Play, learn, and compete with
              players worldwide!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", color: "#f2a900" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
              <li>
                <a
                  href="/play"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Play Chess
                </a>
              </li>
              <li>
                <a
                  href="/learn"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Learn Chess
                </a>
              </li>
              <li>
                <a
                  href="/leaderboard"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", color: "#f2a900" }}>Follow Us</h3>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ borderColor: "#555", margin: "20px 0" }} />

        {/* Bottom Section */}
        <p style={{ fontSize: "14px" }}>
          © {new Date().getFullYear()} ChessMaster. All Rights Reserved. |
          <a
            href="/privacy"
            style={{ color: "#f2a900", textDecoration: "none" }}
          >
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
    </div>
  );
};

export default Footer;
