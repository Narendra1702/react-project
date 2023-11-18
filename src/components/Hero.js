import React from 'react'

function Hero() {
  return (
    <div>
    <div class="container text-left pt-4 pb-4  pb-4">
        <div class="row align-items-start">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="d-flex  align-items-center ">
              <div>
                <span
                  style={{
                    backgroundColor: "orange",
                    borderRadius: "10px",
                    padding: "2px",
                  }}
                >
                  Know before you go
                </span>
              </div>
              <img
                style={{ width: "40px" }}
                src={require("../assets/images/world.png")}
                alt=""
              />
            </div>
            <h1>
              Travelling Opens <br /> the Door to <br /> Creating{" "}
              <span className="text-warning">Memories</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              quod optio? Quidem eos placeat corporis pariatur sed aut eveniet
              optio quod vero exercitationem nam, velit corrupti esse id dolores
              soluta. Ipsa molestiae, sequi officiis provident, enim dolores
              eos, corrupti aspernatur illum eum reprehenderit. Laborum quo
              voluptatum in, rerum ex saepe?
            </p>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 d-flex">
            <img
              className="img-fluid"
              style={{
                width: "150px",
                height: "300px",
                borderRadius: "1rem",
                margin: "20px",
                border: "1px solid orange",
              }}
              src={require("../assets/images/hero-img01.jpg")}
              alt="logo"
            />

            <video
              style={{
                objectFit: "cover",
                width: "150px",
                height: "300px",
                borderRadius: "1rem",
                marginTop: "50px",
                border: "1px solid orange",
              }}
              controls
              autoPlay
              src={require("../assets/images/hero-video.mp4")}
            ></video>

            <img
              className="img-fluid"
              style={{
                width: "150px",
                height: "300px",
                borderRadius: "1rem",
                margin: "20px",
                marginTop: "80px",
                border: "1px solid orange",
              }}
              src={require("../assets/images/hero-img02.jpg")}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;