import React from 'react'
import  {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Header (){

    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src={logo}  style={{width:'15rem'}}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active mx-3" aria-current="page" to='/home'>Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active mx-3" aria-current="page" to='/about'>About</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active mx-3" aria-current="page" to='/tours'>Tours</Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link active mx-3" aria-current="page" to='/login'>Login</Link>
  </li> <li class="nav-item">
  <Link class="nav-link active mx-3" aria-current="page" to='/register'
  >Register</Link>

</li>
       </ul>
    </div>
  </div>
</nav>
    )
}

export default Header;