import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import logo from "../assets/Darklight.png";
import LazyLoad from "react-lazyload";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null); // For tracking the menu
  const toggleRef = useRef(null); // For tracking the toggle button
  const auth = getAuth();
  const user = auth.currentUser;

  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleLogout = async () => {
    signOut(auth).then(() => {
      console.log("User signed out.");
    });
  };

  const handleClickOutside = (e) => {
    // Close the menu if the click is outside both the menu and the toggle button
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(e.target)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks on the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div
        id="header"
        className="text-light d-flex align-items-center justify-content-between position-fixed top-0 start-0 end-0"
        style={{
          backgroundColor: "#fff",

          zIndex: 1000,
          borderBottom: "1px solid #999",
        }}
      >
        {/* Logo Section */}
        <div
          id="logo-part"
          style={{
            padding: "6px 0 3px 9%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LazyLoad height={200} offset={100}>
            <img
              className="logo"
              loading="lazy"
              src={logo}
              alt="Website Logo"
              style={{
                width: "120px", // Default size
                height: "50px",
              }}
            />
          </LazyLoad>
          <span
            className="text-dark"
            style={{
              margin: "0",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            A pawn can defeat the king
          </span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div
          id="menu-bar"
          className="text-dark d-md-none"
          style={{ fontSize: "3rem", cursor: "pointer" }}
          onClick={toggleVisibility}
          ref={toggleRef}
        >
          {isVisible ? <IoClose /> : <FaBars />}
        </div>
        <nav
          id="nav"
          style={{ padding: "1rem 9%" }}
          ref={menuRef}
          className={`${
            isVisible ? "d-block" : "d-none"
          } d-md-flex align-items-center`}
        >
          <ul
            className="list-unstyled d-flex flex-column flex-md-row"
            style={{ fontSize: "1.8rem" }}
          >
            <li className="mx-3">
              <Link
                to="/"
                className="text-decoration-none text-dark"
                onClick={() => setIsVisible(false)}
              >
                Home
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="courses"
                className="text-decoration-none text-dark"
                onClick={() => setIsVisible(false)}
              >
                Courses
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="events"
                className="text-decoration-none text-dark"
                onClick={() => setIsVisible(false)}
              >
                Events
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="Blogs"
                className="text-decoration-none text-dark"
                onClick={() => setIsVisible(false)}
              >
                Blogs
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="gallery"
                className="text-decoration-none text-dark"
                onClick={() => setIsVisible(false)}
              >
                Gallery
              </Link>
            </li>
            <li className="mx-3">
              <Link
                to="about"
                className="text-decoration-none text-dark"
                onClick={() => setIsVisible(false)}
              >
                About
              </Link>
            </li>
          </ul>
          <div className="header-buttons">
            {!user ? (
              <Link
                id="login"
                to="login"
                className="btn btn-primary d-inline-block text-light ms-4 fw-bold rounded-4 mb-3 w-100 w-md-25"
                style={{
                  fontSize: "1.5rem",
                  padding: ".4rem 1.5rem",
                }}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="btn btn-danger d-inline-block text-light ms-4 fw-bold rounded-4 mb-3 w-100 w-md-25"
                style={{ padding: ".4rem 1.5rem", fontSize: "1.5rem" }}
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
