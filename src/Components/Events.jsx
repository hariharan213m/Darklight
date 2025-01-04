import React from "react";
import tournament from "../assets/Tabs.jpg";

const Events = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        zIndex: 1,
        padding: "4% 9%",
      }}
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          {" "}
          <img
            src={tournament}
            loading="lazy"
            alt="About Us"
            className="img-fluid rounded"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="col-md-6" style={{ fontSize: "1.5rem" }}>
          <h1 className="fw-bolder pb-md-3 text-center display-2">
            Dark<span style={{ color: "red" }}>Light</span> Tournaments
          </h1>
          <p className="pb-md-3">
            Personally we believe in improving students skill through our Fellow
            academy tournaments to encourage them to learn from their flaws, we
            also conduct tournaments online.
          </p>
          <p className="pb-md-3">
            During the starting stages of Darklight, we were teaching our
            friends to win against their opponent and some their siblings and it
            was fun doing that but as days went we started coaching students
            from our home, to make chess accessible for all in a professional I
            started Darklight, this was a motivating factor to Develop a
            academy.
          </p>
          <p className="pb-md-3 ">
            Darklight welcomes students who are willing to master chess and also
            loves to teach every bit of learning in chess,{" "}
            <span className="fw-bolder" style={{ color: "red" }}>
              BECAUSE EVERY MOVE MATTERS
            </span>
          </p>
          <p className="pb-md-3 ">
            We strongly believe that age is not a criteria to learn chess.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
