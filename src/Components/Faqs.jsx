import React from "react";

const Faqs = () => {
  const faqs = [
    {
      question: "What is the Chess Academy?",
      answer:
        "The Chess Academy is a platform designed to teach chess to players of all skill levels, from beginners to advanced players.",
    },
    {
      question: "Who can join the Chess Academy?",
      answer:
        "Anyone with an interest in chess can join! We offer courses for kids, adults, and even professional players looking to sharpen their skills.",
    },
    {
      question: "What courses do you offer?",
      answer:
        "We offer courses in chess basics, strategy, tactics, openings, endgames, and advanced gameplay analysis.",
    },
    {
      question: "Are the lessons conducted online or in-person?",
      answer:
        "We offer both online and in-person lessons. You can choose the format that works best for you.",
    },
    {
      question: "Do I need any prior knowledge of chess?",
      answer:
        "Not at all! Our beginner courses are designed to teach you chess from scratch, even if you have no prior experience.",
    },
    {
      question: "How can I enroll in the Chess Academy?",
      answer:
        "You can enroll by visiting our website, selecting your desired course, and completing the registration process. For in-person classes, you can contact us directly.",
    },
  ];

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1e1e2f, #2c3e50)",
        padding: "40px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "#2b2b3c",
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
          padding: "30px",
          border: "1px solid #444",
        }}
      >
        <h1
          className="text-center fw-bold mb-4 display-2"
          style={{
            fontSize: "3rem",
            color: "#f9b234",
            textTransform: "uppercase",
            letterSpacing: "2px",
            borderBottom: "3px solid #f9b234",
            display: "inline-block",
            paddingBottom: "10px",
          }}
        >
          Frequently Asked Questions
        </h1>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div
              className="accordion-item mb-4"
              key={index}
              style={{
                backgroundColor: "#1e1e2f",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                border: "1px solid #333",
              }}
            >
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#f9b234",
                    backgroundColor: "transparent",
                    borderBottom: "1px solid #333",
                    padding: "15px",
                  }}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div
                  className="accordion-body"
                  style={{
                    fontSize: "1.3rem",
                    color: "#dcdcdc",
                    lineHeight: "1.8",
                    backgroundColor: "#29293d",
                    padding: "20px",
                    border: "1px solid #444",
                    borderRadius: "5px",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
