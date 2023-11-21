import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Tours from "./Tours";
import Register from "./Register";
import Login from "./Login";
import Price from "./Price";

function Form() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Form;
