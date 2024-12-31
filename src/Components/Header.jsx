import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Replace with your actual user authentication logic
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // If using React Context for auth state:
  // const { userLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = async () => {
    try {
      await doSignOut();
      setUserLoggedIn(false); // Update state if needed
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <section>
      <div
        id="header"
        className="text-light d-flex align-items-center justify-content-between position-fixed top-0 start-0 end-0"
        style={{
          // backgroundColor: "#001524",
          backgroundColor: "#fff",
          padding: "2rem 9%",
          zIndex: 1000,
          borderBottom: "1px solid #999",
        }}
      >
        <h2
          className="text-dark"
          style={{ fontWeight: "bolder", fontSize: "3rem" }}
        >
          LOGO
        </h2>
        {/* Mobile Menu Toggle Button */}
        <div
          id="menu-bar"
          className="text-dark d-md-none"
          style={{ fontSize: "3rem", cursor: "pointer" }}
          onClick={toggleVisibility}
        >
          {isVisible ? <IoClose /> : <FaBars />}
        </div>
        <nav
          className={`${
            isVisible ? "d-block" : "d-none"
          } d-md-flex align-items-center`}
        >
          <ul
            className="list-unstyled d-flex flex-column flex-md-row"
            style={{ fontSize: "1.8rem" }}
          >
            <li className="mx-3">
              <Link to="/" className="text-decoration-none text-dark">
                Home
              </Link>
            </li>
            <li className="mx-3">
              <Link to="courses" className=" text-decoration-none text-dark">
                Courses
              </Link>
            </li>
            <li className="mx-3">
              <Link to="events" className=" text-decoration-none text-dark">
                Events
              </Link>
            </li>
            <li className="mx-3">
              <Link to="gallery" className=" text-decoration-none text-dark">
                Gallery
              </Link>
            </li>
            <li className="mx-3">
              <Link to="about" className=" text-decoration-none text-dark">
                About
              </Link>
            </li>
          </ul>
          {userLoggedIn && (
            <button
              onClick={handleLogout}
              className="btn btn-danger fw-bold"
              style={{ padding: ".5rem 1rem", fontSize: "1.5rem" }}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Header;
