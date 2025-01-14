import React from "react";

const Faqs = () => {
  const faqs = [
    {
      question:
        "What is the right age to start learning chess at Darklight Chess Academy?",
      answer:
        "We welcome learners of all ages! At Darklight Chess Academy, we’ve trained children as young as 4–6 years old and helped adults rediscover their love for the game. It’s never too early or too late to start your chess journey with us.",
    },
    {
      question: "Do I need any prior chess experience to join?",
      answer:
        "Not at all! Our programs are designed to accommodate everyone, from complete beginners to seasoned players looking to refine their skills. We'll place you in the right group based on your current level.",
    },
    {
      question: "How are classes conducted at Darklight Chess Academy?",
      answer:
        "We offer both online and in-person classes to suit your needs. Our sessions are interactive, featuring live demonstrations, practice games, and tailored feedback. Online classes utilize cutting-edge tools for a seamless learning experience.",
    },
    {
      question: "Can I participate in chess tournaments through your academy?",
      answer:
        "Absolutely! We regularly organize tournaments for our students and also guide them to participate in local, national, and online chess events. Tournaments are an integral part of our curriculum to help students build confidence and sharpen their skills.",
    },
    {
      question:
        " Why should I choose Darklight Chess Academy for learning chess?",
      answer:
        "As co-founders deeply passionate about chess, we’ve created a nurturing environment where learning meets fun. Our academy emphasizes personalized coaching, cultural inclusivity, and opportunities for growth, ensuring every student thrives both on and off the board.",
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
