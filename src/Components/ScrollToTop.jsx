import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollContainer = document.getElementById("main-content"); // Replace "main-content" with your container's ID
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling for the container
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Fallback for the window
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
