import React,{useState} from "react";
import "./registerForm.css";
import { Link,useNavigate } from "react-router-dom";

function Register() {
 const navigate = useNavigate();
 const [name, setname] = useState();
 const [email,setemail] = useState();
 const [password,setpassword] = useState();

 const submitHandler = () =>{
  if (name == '' && email == '' && password == ''){
    alert('field cannot be empty')
  }
  else {
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    alert('User Registerd');
    navigate('/login')
  }
  
 }
 
  return (
    <div class="container text-center justify-content-center container-form">
      <div class="row p-0 w-75 row-form justify-content-center text-center">
        <div class="col-7 col1 d-flex justify-content-center align-items-center ">
          <img src={require("../assets/images/register.png")} />
        </div>
        <div class="col-5 bg-warning column2">
          <img src={require("../assets/images/user.png")} />
          <div className="formtext">
            <h3 style={{ color: "white" }}>Register</h3>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="    User Name" />
            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="    Email" />
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="    Password" />
            <button onClick={submitHandler}>Create Account</button>
            <p>Already have an account?</p>
            <Link to='/login'  style={{color:'black',position:'relative', top:'1.2rem',textDecoration:'none'}}>Login</Link>

          </div>
        </div>
      </div>
      </div>
  );
}

export default Register;
