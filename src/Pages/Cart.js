import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removetocart } from '../redux/Slice'

export default function Cart() {
  const dispatch =  useDispatch()
  const cartdata =  useSelector((state)=>state.cart)


const removedata =()=>{
  dispatch(removetocart(cartdata))
}

  return (
    <div className="container">
    <h2 className="display-3 text-center fw-bold " style={{paddingTop:'100px'}}>My Cart</h2>
    <h1>CART ITEM {cartdata.length}</h1>
    <div className="container bg-white">
      {cartdata.map((item, index) => (
        <div className="row border-bottom py-2" key={index}>
          <div className="col-2">
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <h5 className="mb-1">{item.title}</h5>
            <p className="text-muted mb-0">Price: ${item.price}</p>
            <p className="text-muted mb-0">Quantity: </p>
          </div>

          <div className='btn btn-danger' onClick={removedata}>Remove</div>
          
        </div>
      ))}
      
      
    </div>
  </div>






    
    
  )
}