import React from 'react';
import './style.css';

function BestServices() {
  return (
    <div>
    <div className="container text-center pt-5 pb-4">
    <div className="row-offer ">
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 ">
        <span className="text-warning">What We Serve</span>
        <h2>
          We offer our <br /> best services
        </h2>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 border card-offer">
        <img
          src={require("../assets/images/weather.png")}
          alt=""
          style={{
            backgroundColor: "orange",
            width: "50px",
            borderRadius: "20px",
            padding: "5px",
          }}
        />

        <h6>Calicate Weather</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          blanditiis tenetur debitis itaque, totam ipsam dolores
          dignissimos, maiores architecto neque commodi nostrum enim!
        </p>
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 border card-offer ">
        <img
          src={require("../assets/images/guide.png")}
          alt=""
          style={{
            backgroundColor: "orange",
            width: "50px",
            borderRadius: "20px",
            padding: "5px",
          }}
        />
        <h6>Best tour guide</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          blanditiis tenetur debitis itaque, totam ipsam dolores
          dignissimos, maiores architecto neque commodi nostrum enim!
        </p>{" "}
      </div>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-left border card-offer">
        <img
          src={require("../assets/images/customization.png")}
          alt=""
          style={{
            backgroundColor: "orange",
            width: "50px",
            borderRadius: "20px",
            padding: "5px",
          }}
        />
        <h6>Customization</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          blanditiis tenetur debitis itaque, totam ipsam dolores
          dignissimos, maiores architecto neque commodi nostrum enim!
        </p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default BestServices