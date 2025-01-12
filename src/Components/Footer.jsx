import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"; // Importing WhatsApp and YouTube icons
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div
      id="footer"
      style={{
        background: "#001524",
        color: "#fff",
        padding: "20px 0",
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
          <p style={{ fontSize: "1.25rem" }}>
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
              <Link to="about" className="text-decoration-none text-light">
                About
              </Link>
            </li>
            <li>
              <p>Help Centre</p>
            </li>
            <li>
              <p>Business</p>
            </li>
            <li>
              <a href="" className="text-decoration-none text-light">
                Contact
              </a>
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
              <Link to="faqs" className="text-decoration-none text-light">
                FAQs
              </Link>
            </li>
            <li>
              <p>Terms & Conditions</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <Link to="carrer" className="text-decoration-none text-light">
                Carrer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Container
        fluid
        style={{
          // backgroundColor: "#f8f9fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row className="text-center">
          <Col>
            <h1 className="mb-4">Contact Us</h1>
            <p className="mb-4" style={{ fontSize: "1.2rem", color: "#999" }}>
              Follow us on our social media platforms.
            </p>

            {/* Social Media Icons */}
            <div className="d-flex justify-content-center">
              <Button
                variant="outline-primary"
                className="mx-3"
                href="https://www.facebook.com/profile.php?id=61561127117854&name=xhp_nt_fbaction_open_user"
                target="_blank"
                style={{
                  fontSize: "2rem",
                  padding: "15px 20px",
                  borderRadius: "50%",
                  backgroundColor: "#3b5998",
                  color: "white",
                }}
              >
                <FaFacebook />
              </Button>

              {/* Replacing Twitter with WhatsApp */}
              <Button
                variant="outline-success"
                className="mx-3 border-0"
                href="https://wa.me/918300155259" // Replace with your WhatsApp number link
                target="_blank"
                style={{
                  fontSize: "2rem",
                  padding: "15px 20px",
                  borderRadius: "50%",
                  backgroundColor: "#25D366",
                  color: "white",
                }}
              >
                <FaWhatsapp />
              </Button>

              <Button
                variant="outline-danger"
                className="mx-3"
                href="https://www.instagram.com/darklightchessacademy_official/"
                target="_blank"
                style={{
                  fontSize: "2rem",
                  padding: "15px 20px",
                  borderRadius: "50%",
                  backgroundColor: "#E4405F",
                  color: "white",
                }}
              >
                <FaInstagram />
              </Button>

              <Button
                variant="outline-primary"
                className="mx-3"
                href="https://www.linkedin.com/in/karuppasamy-c-a03428249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                style={{
                  fontSize: "2rem",
                  padding: "15px 20px",
                  borderRadius: "50%",
                  backgroundColor: "#0077B5",
                  color: "white",
                }}
              >
                <FaLinkedin />
              </Button>

              {/* Replacing Twitter with YouTube */}
              <Button
                variant="outline-danger"
                className="mx-3"
                href="https://www.youtube.com/@DarklightChess-64"
                target="_blank"
                style={{
                  fontSize: "2rem",
                  padding: "15px 20px",
                  borderRadius: "50%",
                  backgroundColor: "#FF0000",
                  color: "white",
                }}
              >
                <FaYoutube />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

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
