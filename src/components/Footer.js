import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <div class="container text-center footer">
        <div class="row align-items-center">
          <div class="col">
            <img src={require("../assets/images/logo.png")} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro
            velit ea quisquam labore</p>
            <div className="footer-icons">
              <i class="fa-solid fa-user-gear"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div class="col">
            <h4>Discover</h4>
            <p>Home</p>
            <p>About</p>
            <p>Tours</p>
          </div>
          <div class="col">
            <h4>Quick Links</h4>
            <p>Gallery</p>
            <p>Login</p>
            <p>Register</p>
          </div>
          <div class="col">
            <h4>Contact</h4>
            <p>Address: Marthahalli Bangalore</p>
            <p>Email : narendraneelapala6@gmail.com</p>
            <p>Phone: +91 9381448227</p>
          </div><br></br>
          <p style={{margin:'3rem 0rem 0rem 0rem'}}>Copyright 2023, Design and  develop by Narendra. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;