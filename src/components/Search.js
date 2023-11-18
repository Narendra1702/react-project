import React from 'react';
import { Link } from "react-router-dom";
import { tours } from "./Tours";
import { store1 } from "../App";
import { useState, useContext } from "react";

const Search = ({ addtocart }) => {
    const [search, setsearch] = useState("");
  const [islogin, setislogin] = useContext(store1);
  return (
    <div>
    <div class="container text-left pt-4">
        <div
          class="row align-items-start w-75 border "
          style={{ borderRadius: "25px", padding: "1rem" }}
        >
          <div class="col-4 " style={{ borderRight: "0.5px solid gray" }}>
            <p className="fs-5">
              {" "}
              <i class="fa-solid fa-location-dot text-warning"></i>Location
            </p>
            <input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              h
              type="text"
              placeholder="where are you going?"
              style={{ outline: "none", border: "none" }}
            />
          </div>
          <div class="col-4" style={{ borderRight: "0.5px solid gray" }}>
            <p className="fs-5">
              <i class="fa-solid fa-location-arrow text-warning"></i>Distence
            </p>
            <input
              type="text"
              placeholder="Distence k/M"
              style={{ outline: "none", border: "none" }}
            />
          </div>
          <div class="col-3">
            <p className="fs-5">
              <i class="fa-solid fa-user-group text-warning"></i>Max People{" "}
            </p>
            <input
              type="text"
              placeholder="0"
              style={{ outline: "none", border: "none" }}
            />
          </div>
          <div class="col-1  mx-auto my-auto">
            <i
              class="fa-solid fa-magnifying-glass text-white "
              style={{
                backgroundColor: "orange",
                padding: "10px",
                borderTopLeftRadius: "10px ",
                borderBottomRightRadius: "10px ",
              }}
            ></i>
          </div>
        </div>
      </div>
      <div class="container pt-4">
        {/* search bar  */}
        <div class="container pt-4">
          <div class="row">
            {tours
              .filter((value) => {
                if (search == "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
              })

              .map((value, index) => (
                <div
                  key={index}
                  class=" col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3   pb-4"
                >
                  <div class="card">
                    <img
                      className="img-fluid "
                      src={value.photo}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div className="d-flex  justify-content-between">
                        <span>{value.city}</span>
                        <p class="card-title">
                          <i class="fa-solid fa-star  text-warning"></i>Not
                          rated
                        </p>
                      </div>
                      <h5 class="card-title">{value.title}</h5>
                    </div>
                    <div className="d-flex  justify-content-between p-3">
                      <p class="card-text text-warning">
                        {value.price}{" "}
                        <span className="text-black">
                          / per <br /> person
                        </span>
                      </p>
                      <a
                        href="#"
                        class="btn btn-sm btn-warning h-25 "
                        onClick={() => addtocart(value)}
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search