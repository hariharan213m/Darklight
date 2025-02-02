import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  // Fetch feedback data from localStorage
  useEffect(() => {
    const storedFeedback =
      JSON.parse(localStorage.getItem("feedbackList")) || [];
    setFeedbackList(storedFeedback);
  }, []);

  const isSingleFeedback = feedbackList.length === 1;
  const isTwoFeedbacks = feedbackList.length === 2;

  return (
    <div className="my-4 container">
      {feedbackList.length > 0 && (
        <>
          <h4
            className="display-2 fw-bold text-center"
            style={{ color: "red" }}
          >
            Feedback
          </h4>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={
              feedbackList.length > 2
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                  }
                : false // Disable autoplay for 1 or 2 feedback items
            }
            pagination={{ clickable: true }}
            loop={feedbackList.length > 2} // Disable loop for 1 or 2 slides
            spaceBetween={20}
            slidesPerView={isSingleFeedback ? 1 : isTwoFeedbacks ? 2 : 3}
            centeredSlides={isSingleFeedback} // Center slide if only 1 item
            allowTouchMove={feedbackList.length > 2} // Disable touch/swipe movement for 1 or 2 feedback items
            className={`my-5 ${
              isSingleFeedback
                ? "center-single-card"
                : isTwoFeedbacks
                ? "space-evenly-two-cards"
                : ""
            }`}
          >
            {feedbackList.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div
                  className="card shadow text-center rounded-5 p-4"
                  style={{
                    maxWidth: "350px",
                    height: "500px",
                    overflow: "hidden",
                    margin: "0 auto", // Center the card horizontally
                  }}
                >
                  <div className="card-body align-content-center">
                    <h5
                      className="card-title fw-bold"
                      style={{ fontSize: "3.5rem" }}
                    >
                      " {feedback.name} "
                    </h5>
                    <p className="card-text" style={{ fontSize: "1.5rem" }}>
                      {feedback.content}
                    </p>
                    <p className="text-warning" style={{ fontSize: "2rem" }}>
                      {"⭐".repeat(feedback.stars)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default Feedback;
