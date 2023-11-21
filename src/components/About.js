import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="container mt-0">
        <div class="row mt-0">
          <div class="col-lg-6" style={{ marginTop: "70px" }}>
            <h1 className="dance-font mb-3 text-warning">
              <b>About Us</b>
            </h1>
            <p>
              Welcome to Your Tourism! We are dedicated to providing you with
              the best travel experiences. Our team of experts will take you on
              unforgettable adventures around the world. Our team of expert
              guides and travel enthusiasts is committed to making your dreams
              come true. Whether you seek cultural immersion, adrenaline rushes,
              or peaceful escapes, we have the perfect trips waiting for you.
            </p>
          </div>
          <div class="col-lg-6" style={{ marginTop: "100px" }}>
            <img
              src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153262.jpg?2&w=900&t=st=1700289241~exp=1700289841~hmac=80593e9aa3263f3d81ad3db4fd0c1f5b02c1c694f23aa2b70a2f5f7ca99356e4"
              class="img-fluid"
              alt="About Us Image"
            />
          </div>
        </div>
      </div>

      <section class="container mt-5">
        <h1 className="dance-font mb-3 text-warning">
          <b>Our Vision</b>
        </h1>
        <p>
          At Your Tourism, our vision is to inspire and enable people to explore
          the world. We believe that traveling not only broadens horizons but
          also enriches lives. We are committed to promoting responsible and
          sustainable tourism to protect our planet's natural and cultural
          heritage for future generations.
        </p>
      </section>

      <section class="container mt-5">
        <h1 className="dance-font mb-4 text-warning">
          <b>Why to choose Us ?</b>
        </h1>
        <div class="row about-images">
          <div class="col-md-4 mt-4">
            <h4>Expert Guides</h4>
            <p>
              Our knowledgeable guides ensure you have a safe and enriching
              experience on every trip.
            </p>
            <div>
              <img
                className="img-fluid mt-3 shadow-lg rounded"
                src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=1380&t=st=1700288729~exp=1700289329~hmac=e764d059a1fb6f66e936bd6d3a9171bd11d737ee8f0666194d90feb21c097d53"
                alt="tourist1"
              />
            </div>
          </div>
          <div class="col-md-4 mt-4">
            <h4>Unique Experiences</h4>
            <p>
              We offer unique itineraries that allow you to explore destinations
              in an immersive way.
            </p>
            <div>
              <img
                className="img-fluid mt-3 shadow-lg rounded"
                src="https://img.freepik.com/free-photo/one-person-standing-cliff-achieving-success-generated-by-ai_188544-11834.jpg?t=st=1700288459~exp=1700292059~hmac=734506c24b55c3dfa3fb9ab133e266cc94968e7ba84e69a6ce4f96235cbe2032&w=1380"
                alt="tourist2"
              />
            </div>
          </div>
          <div class="col-md-4 mt-4">
            <h4>Sustainability</h4>
            <p>
              We are dedicated to sustainable tourism practices, reducing our
              environmental impact.
            </p>
            <div>
              <img
                className="img-fluid mt-3 shadow-lg rounded about"
                src="https://img.freepik.com/free-photo/young-woman-sitting-hill-high-mountains_335224-424.jpg?w=1060&t=st=1700289006~exp=1700289606~hmac=f77b477b592342ebdf26455b2324935e316bf0605cf97c629746592ee9221e00"
                alt="tourist3"
                style={{
                  height: "14.9rem",
                  width: "26rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
