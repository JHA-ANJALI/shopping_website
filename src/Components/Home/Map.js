import React, { useEffect, useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './map.css'

export default function Map() {

   const [data,setdata]=useState([])

   const get=async()=>{
    const response = await fetch("https://dummyjson.com/products")
    const result=await response.json()
    setdata(result.products)
   }

   useEffect(()=>{
    get()
   })

  return (
    <div className='Container-fluid bg-white'>
        <h1 className='display-3 text-center fw-bold py-2' >Trending Products</h1>
        <div className='Container container bg-white d-flex flex-wrap justify-content-center'>
        {
            data.slice(0,8).map(function(value,index){
                return(
                    <div className='col-xl-3 col-lg-4 col-mb-4 col-sm-6 col-11'>
                    <div className="card m-2" style={{width: '16rem'}}>
                    <img style={{height:"250px;"}} src={value.thumbnail} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <span className='fs-6' style={{color:"grey"}}>{value.category}</span>
                    <h5 className="card-title fs-6">{value.title}</h5>
                    <p className=''  style={{color:"grey" , fontWeight:"bold"}}>{value.rating}</p>
                     <div className='d-flex'>
                     <p className="card-text">Some quick example text .</p>
                     <a href="#" className="butto btn btn-primary ms-auto"><ShoppingCartOutlinedIcon/>ADD TO Cart</a>
                     </div>
                      </div>
                      </div>
                    </div>

                )
            })
        }

        </div>
    </div>
  )
}
