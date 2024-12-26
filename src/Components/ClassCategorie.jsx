import React from "react";

const ClassCategories = () => {
  return (
    <section class="container-fluid my-5">
      <div class="row justify-content-center g-4">
        <div class="row ">
          <div
            class="col text-center pb-5"
            style="font-family: 'Bodoni', serif; line-height:3;"
          >
            <h1
              class="fw-bold text-uppercase"
              style="color:#3366cc; font-size: 4rem; font-family: 'Bodoni', serif;letter-spacing:1px;"
            >
              Chess Course Categories
            </h1>
            <p class="lead text-light" style={{ fontSize: "2rem" }}>
              Choose a course that suits your level and goals. From the
              fundamentals to advanced tactics, we have something for everyone.
            </p>
          </div>
        </div>
        <div
          class="col-12 col-md-5 me-3 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style="height: 350px; background: linear-gradient(45deg, rgba(255, 140, 0, 0.7), rgba(255, 165, 0, 0.5)); color: #fff; transition: transform 0.3s ease, box-shadow 0.3s ease;"
        >
          <h2
            class="text-light fw-bold text-uppercase mb-3"
            style="font-size: 3rem; letter-spacing: 2px;"
          >
            Beginner
          </h2>
          <p
            class="text-light mb-4"
            style="font-size: 1.5rem; max-width: 600px;"
          >
            Start your chess journey by mastering basic moves and strategies.
          </p>
          <a
            href="#"
            class="btn btn-outline-light"
            style="font-size: 1.3rem; padding: 10px 30px; border-radius: 30px;"
          >
            Book Now
          </a>
        </div>

        <div
          class="col-12 col-md-5 ms-3 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style="height: 350px; background: linear-gradient(45deg, rgba(0, 255, 255, 0.7), rgba(0, 204, 255, 0.5)); color: #fff; transition: transform 0.3s ease, box-shadow 0.3s ease;"
        >
          <h2
            class="text-light fw-bold text-uppercase mb-3"
            style="font-size: 3rem; letter-spacing: 2px;"
          >
            Intermediate
          </h2>
          <p
            class="text-light mb-4"
            style="font-size: 1.5rem; max-width: 600px;"
          >
            Enhance your skills with a deeper understanding of tactics and
            strategies.
          </p>
          <a
            href="#"
            class="btn btn-outline-light"
            style="font-size: 1.3rem; padding: 10px 30px; border-radius: 30px;"
          >
            Book Now
          </a>
        </div>

        <div
          class="col-12 col-md-5 me-3 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style="height: 350px; background: linear-gradient(45deg, rgba(255, 0, 0, 0.7), rgba(204, 0, 0, 0.5)); color: #fff; transition: transform 0.3s ease, box-shadow 0.3s ease;"
        >
          <h2
            class="text-light fw-bold text-uppercase mb-3"
            style="font-size: 3rem; letter-spacing: 2px;"
          >
            Advanced
          </h2>
          <p
            class="text-light mb-4"
            style="font-size: 1.5rem; max-width: 600px;"
          >
            Refine your skills and learn advanced strategies to master the game.
          </p>
          <a
            href="#"
            class="btn btn-outline-light"
            style="font-size: 1.3rem; padding: 10px 30px; border-radius: 30px;"
          >
            Book Now
          </a>
        </div>

        <div
          class="col-12 col-md-5 ms-3 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style="height: 350px; background: linear-gradient(45deg, rgba(255, 215, 0, 0.7), rgba(255, 193, 0, 0.5)); color: #fff; transition: transform 0.3s ease, box-shadow 0.3s ease;"
        >
          <h2
            class="text-light fw-bold text-uppercase mb-3"
            style="font-size: 3rem; letter-spacing: 2px;"
          >
            Master
          </h2>
          <p
            class="text-light mb-4"
            style="font-size: 1.5rem; max-width: 600px;"
          >
            Master deep strategies and improve your decision-making for
            competitive play.
          </p>
          <a
            href="#"
            class="btn btn-outline-light"
            style="font-size: 1.3rem; padding: 10px 30px; border-radius: 30px;"
          >
            Book Now
          </a>
        </div>

        <div
          class="col-12 col-md-5 text-center position-relative p-4 rounded d-flex flex-column justify-content-center align-items-center"
          style="height: 350px; background: linear-gradient(45deg, rgba(128, 0, 128, 0.7), rgba(75, 0, 130, 0.5)); color: #fff; transition: transform 0.3s ease, box-shadow 0.3s ease;"
        >
          <h2
            class="text-light fw-bold text-uppercase mb-3"
            style="font-size: 3rem; letter-spacing: 2px;"
          >
            Grandmaster
          </h2>
          <p
            class="text-light mb-4"
            style="font-size: 1.5rem; max-width: 600px;"
          >
            Achieve the pinnacle of chess mastery and compete at the highest
            level of play.
          </p>
          <a
            href="#"
            class="btn btn-outline-light"
            style="font-size: 1.3rem; padding: 10px 30px; border-radius: 30px;"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassCategories;
