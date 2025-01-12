import React from "react";
import BgBlog from "../assets/13736.jpg";


const Carrer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BgBlog})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "150vh",
        width: "100%",
      }}
    ></div>
  );
};

export default Carrer;
