import React, { useState, useContext } from "react";
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
          backgroundColor: "#001524",
          padding: "2rem 9%",
          zIndex: 1000,
        }}
      >
        <h2
          className="text-light"
          style={{ fontWeight: "bolder", fontSize: "2.5rem" }}
        >
          LOGO
        </h2>
        {!isVisible ? (
          <div
            id="menu-bar"
            className="text-light d-md-none d-block"
            style={{ fontSize: "3rem", cursor: "pointer" }}
            onClick={toggleVisibility}
          >
            <FaBars />
          </div>
        ) : (
          <div
            className="text-light d-md-none d-block"
            style={{
              fontSize: "3rem",
              cursor: "pointer",
              transform: "rotate(180deg)",
            }}
            onClick={toggleVisibility}
          >
            <IoClose />
          </div>
        )}
        {isVisible && (
          <nav>
            <ul
              className="list-unstyled d-flex flex-column flex-md-row"
              style={{ fontSize: "1.7rem" }}
            >
              <li className="mx-3">
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li className="mx-3">
                <Link to="courses" className=" text-decoration-none text-light">
                  Courses
                </Link>
              </li>
              <li className="mx-3">
                <Link to="blogs" className=" text-decoration-none text-light">
                  Blogs
                </Link>
              </li>
              <li className="mx-3">
                <Link to="gallery" className=" text-decoration-none text-light">
                  Gallery
                </Link>
              </li>
              <li className="mx-3">
                <Link to="about" className=" text-decoration-none text-light">
                  About
                </Link>
              </li>
            </ul>
            {userLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-sm text-blue-600 underline"
              >
                Logout
              </button>
            ) : (
              <>
                <Link className="text-sm text-blue-600 underline" to="/login">
                  Login
                </Link>
                <Link
                  className="text-sm text-blue-600 underline"
                  to="/register"
                >
                  Register New Account
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </section>
  );
};

export default Header;
