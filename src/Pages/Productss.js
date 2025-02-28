import React, { useEffect, useState } from 'react'
import '../Components/Home/map.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/Slice';

export default function Product() {


 const  [data,setdata]=useState([])
 const  [filterdata,setfilterdata]=useState(data)
 const dispatch=useDispatch()

 const navigate =useNavigate()
 const senddata=(value)=>{
  dispatch(addtocart(value))
 }
  useEffect(()=>{
      
  const  fetchdata=async()=>{
      // const response =await fetch("https://shivraj-chavan.github.io/data/electronics.json")
      // const data = await response.json()

      const {data}=  await axios("https://shivraj-chavan.github.io/api/electronics.json")
      setdata(data)
      setfilterdata(data)
    }
    fetchdata()

  },[])

  const addfilter=(category)=>{
    if(category=="All"){
      setfilterdata(data)
      console.log("demooo")
    }
    else{

      let newdata = data.filter((dt)=>dt.category==category)
      setfilterdata(newdata)
    }

  }


  const openPage=(x)=>{
    navigate(`/Productss/${x.category}/${x.id}`)
  }

  
  const openCart=(x)=>{
    navigate(`/Cart`)
  }


  return (
    <div className='pt-5'>
      <div className='btn btn-primary mt-5  ' onClick={()=>addfilter("All")} > All</div>
      <div className='btn btn-primary mt-5 ' onClick={()=>addfilter("mobile")} >Mobile</div>
      <div className='btn btn-primary mt-5 '  onClick={()=>addfilter("laptop")}>Laptop</div>
      <div className='btn btn-primary mt-5 '  onClick={()=>addfilter("watch")}>Watch</div>
      <div className='btn btn-primary mt-5 '  onClick={()=>addfilter("airdopes")}>Airpods</div>

      <div style={{paddingTop:'100px'}}>
      <h5 style={{fontSize:'20px',paddingLeft:'29px',fontWeight:400}}>Products</h5>
        <div className='d-flex flex-wrap position-relative justify-content-center align-items-center gap-3' >
        {
            filterdata?.map((value,index)=>{
                return(
                    <div className="card  mt-2 rounded-0 " style={{ width: '22rem' ,height:'380px'}}>
                    <img style={{height:"230px",width:'215px', margin:'auto'}}src={value.thumbnail} onClick={()=>{openPage(value)}} className=" img card-img-top" alt="..." />
                    <div className='border'></div>
                    <div className="card-body">
                        <p className="category card-title"> {value.category}</p>
                        <p className="name card-title">{value.title}</p>
                        <p className='rating card-text'> {value.rating}</p>
                        <p className="price card-text">{value.price}</p>
                        <p className="discount card-text ">{value.discount} <span className='text-black fw-bold text-decoration-none'>{value.dis}</span></p>

                        <a href="#" className="button btn btn-primary"  onClick={()=>{senddata(value)}}>{< AddShoppingCartIcon  className="icon" onClick={()=>{openCart(value)}}/>} ADD TO CART</a>
                    </div>
                </div>
                )
            })
        }
        </div>
    </div>
    </div>  
  )
}