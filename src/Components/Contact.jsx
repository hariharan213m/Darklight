import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"; // Importing WhatsApp and YouTube icons
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row className="text-center">
        <Col>
          <h1 className="mb-5">Contact Us</h1>
          <p className="mb-4" style={{ fontSize: "1.2rem", color: "#555" }}>
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
  );
};

export default Contact;
