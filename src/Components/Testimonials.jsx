import React from "react";

const Testimonials = () => {
  return (
    <div
  style={{
    backgroundColor: "#f7f7f7",
    padding: "50px 20px",
    textAlign: "center",
    borderRadius: "10px",
  }}
>
  <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "30px" }}>
    What Our Players Say ♟️
  </h2>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* Testimonial 1 */}
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
      }}
    >
      <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
        "Joining ChessMaster was the best *move* I ever made. My friends now
        call me the ‘Queen Slayer’!"
      </p>
      <h4 style={{ fontWeight: "bold", color: "#f2a900" }}>— Sarah B.</h4>
      <span style={{ fontSize: "14px", color: "#666" }}>Casual Player</span>
    </div>

    {/* Testimonial 2 */}
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
      }}
    >
      <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
        "I came for the free lessons, but I stayed for the checkmates. 10/10
        would recommend!"
      </p>
      <h4 style={{ fontWeight: "bold", color: "#f2a900" }}>— Mike R.</h4>
      <span style={{ fontSize: "14px", color: "#666" }}>
        Aspiring Grandmaster
      </span>
    </div>

    {/* Testimonial 3 */}
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
      }}
    >
      <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
        "From pawns to kings, this website is my ultimate chess board. I can’t
        stop playing!"
      </p>
      <h4 style={{ fontWeight: "bold", color: "#f2a900" }}>— Emily T.</h4>
      <span style={{ fontSize: "14px", color: "#666" }}>Chess Enthusiast</span>
    </div>

    {/* Testimonial 4 */}
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
      }}
    >
      <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
        "This platform helped me level up my game. Now I’m the boss of my chess
        club!"
      </p>
      <h4 style={{ fontWeight: "bold", color: "#f2a900" }}>— John D.</h4>
      <span style={{ fontSize: "14px", color: "#666" }}>Club Champion</span>
    </div>
  </div>
</div>

  );
};

export default Testimonials;
