import React,{useState} from "react";
import "./registerForm.css";
import {Link, useNavigate} from 'react-router-dom'
import Register from './Register'
import Home from "./Home";

function Login() {
  const navigate=useNavigate()

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler=()=>{
     const storeemail=localStorage.getItem('email');
     const storepasd=localStorage.getItem('password');

    if(email==''){
      alert('please enter valid email');
    }
    else if(password==''){
      alert("password is required")

    }
    else if(storeemail==email && storepasd==password){
      navigate('/home')

    }
    else{
      alert('invalid credencdial')
    }
  } 

  return (
    <div class="container text-center justify-content-center container-form">
      <div class="row row-form justify-content-center text-center">
        <div class="col-7 col1 d-flex justify-content-center align-items-center ">
          <img src={require("../assets/images/login.png")} />
        </div>
        <div class="col-5 bg-warning column2">
          <img src={require("../assets/images/user.png")} />
          <div className="formtext">
            <h3 style={{ color: "white" }}>Login</h3>
            <input type="email" value={email}  onChange={(e)=>setemail(e.target.value)} placeholder="    Email" />
            <input type="password" value={password}  onChange={(e)=>setpassword(e.target.value)} placeholder="    Password" />
            <button onClick={submitHandler}>Log in</button>
            <p>Don't have an account?</p>
            <Link to='/register' style={{color:'black',position:'relative', top:'1.2rem',textDecoration:'none'}}>Register</Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Login;
