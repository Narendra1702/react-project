import React from 'react'

function Subscription() {
  return (
    <div>
    <div class="container text-left w-100 ml-0 mr-0">
        <div
          class="row align-items-start "
          style={{
            backgroundColor: "#91b1f1",
            marginBottom: "50px",
            paddingBottom: "50px",
            paddingTop: "50px",
          }}
        >
          <div class="col px-5 ">
            <h3 className="pb-4">
              Subscribe Now for Usefull, <br /> Travelling Information
            </h3>
            <div
              className="bg-white d-flex justify-content-between w-75 "
              style={{ borderRadius: "20px" }}
            >
              <input
                className="border"
                type="text"
                placeholder="Enter your name"
                style={{
                  border: "none",
                  outline: "none",
                  width: "40rem",
                  borderRadius: "1rem",
                }}
              />
              <button
                className="btn btn-lg btn-warning border-0 m-1"
                style={{ width: "10rem" ,color:'white'}}
              >
                Subscribe
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
              velit ea quisquam labore ipsam praesentium eum, sit odit
              dignissimos.
            </p>
          </div>
          <div class="col  align-items-start">
            <img
              className="img-fluid"
              style={{ height: "300px" }}
              src={require("../assets/images/male-tourist.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription