import React from 'react'

function Experience() {
  return (
    <div>
    <div class="container text-left pt-4  mb-4 mt-4">
        <span className="bg-warning p-1" style={{ borderRadius: "8px" }}>
          Experience
        </span>
        <div class="row align-items-start">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h3>
              With our all experience , <br /> we will serve you
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              veritatis distinctio, laborum recusandae aperiam odio.
            </p>
            <div
              className="d-flex pt-5 text-white text-center align-items-center mx-auto  my-auto"
              style={{ justifyContent: "space-around" }}
            >
              <button className="btn btn-warning btn-lg">15k</button>
              <button className="btn btn-warning btn-lg">2k</button>
              <button className="btn btn-warning btn-lg">12k</button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img
              className="img-fluid w-75"
              src={require("../assets/images/experience.png")}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Gallery  */}
      <div class="container text-left pt-4">
        <span className="bg-warning p-1" style={{ borderRadius: "8px" }}>
          Gallery
        </span>
        <h3>Visit our custumer tour gallery</h3>

        <div class="row align-items-start pt-4">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 gallery">
            <img
              className="img-fluid gallery "
              style={{ borderRadius: "1rem", cursor: "pointer" }}
              src={require("../assets/images/gallery-01.jpg")}
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 gallery">
            <img
              className="img-fluid  gallery"
              style={{ borderRadius: "1rem", cursor: "pointer" }}
              src={require("../assets/images/gallery-02.jpg")}
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 gallery">
            <img
              className="img-fluid gallery"
              style={{ borderRadius: "1rem", cursor: "pointer" }}
              src={require("../assets/images/gallery-03.jpg")}
              alt=""
            />
          </div>{" "}
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 gallery">
            <img
              className="img-fluid gallery"
              style={{ borderRadius: "1rem", cursor: "pointer" }}
              src={require("../assets/images/gallery-04.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container text-left pt-4 pb-4 mb-4">
        <div class="row align-items-start">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 gallery">
            <img
              className="img-fluid gallery"
              style={{ borderRadius: "1rem", cursor: "pointer" }}
              src={require("../assets/images/gallery-05.jpg")}
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 gallery">
            <img
              className="img-fluid gallery"
              style={{ borderRadius: "1rem", cursor: "pointer" }}
              src={require("../assets/images/gallery-06.jpg")}
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 gallery">
            <img
              className="img-fluid gallery"
              style={{ borderRadius: "1rem", cursor: "pointer" }}
              src={require("../assets/images/gallery-07.jpg")}
              alt=""
            />
          </div>{" "}
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 gallery">
            <img
              className="img-fluid gallery"
              style={{ borderRadius: "1rem", cursor: "pointer" }}
              src={require("../assets/images/gallery-08.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience