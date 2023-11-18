import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Price = ({ product }) => {
  const navigate=useNavigate();
const [person, setperson] = useState(1)
const [personprice, setpersonprice] = useState(product.price)

const setchangeperson=(price,e)=>{
  setperson(e.target.value)
  setpersonprice(price*e.target.value)
  
}

const CloseHandler=()=>{
  navigate('/Home')
}
console.log(person);
  return (
    <div className='container pt-5 pb-5 bg-warning' >
      <div className=' row ' style={{position: "relative"}}>
      <div style={{textAlign:'end'}}>
      <span style={{textAlign:'end',padding:"20px",backgroundColor:"white"}} onClick={CloseHandler}><i class="fa-solid fa-x"></i></span>

      </div>

        
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex justify-content-between  justify-content-center align-items-center ">
            <div><img className='img-fluid mx-auto my-auto bdnone' src={product.photo} alt="" style={{width:'30rem', height:'30rem'}} />
            </div>

            <div className='text-start py-5'>
          
           
              <h5 className='pt-4'>{product.title}</h5>
              <p className='pt-4 pb-2'> <span className='fs-5'>Distance:</span> <br/>{product.distance}</p>
              <p className='pt-4 pb-2'> <span className='fs-5'>Address:</span><br/>{product.address}</p>


              <p className='pt-4 pb-2'><span className='fs-5'>Price:</span> {product.price}</p>
              <label className='fs-5' for="">Enter Number Of Persons</label><br/>
              <input style={{border:person ? "none": "1px solid black"}}   type="text" value={person}  onChange={(e)=>(setchangeperson(product.price,e))} placeholder='Select num of persons'/>
              <h1 className='pt-4'>TotalPrice:${personprice}</h1>
            </div>
          </div>






    

      </div>

    </div>
  )
}

export default Price;