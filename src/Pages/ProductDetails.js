import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

        
    const {category,id}=useParams()

    const[data,setdata]= useState([])



    const singleData= async()=>{

        const response = await axios(`https://shivraj-chavan.github.io/api/electronics/${category}/${id}.json`)

        console.log(response.data)

        setdata(response.data)

    }

    useEffect(()=>{
        singleData()
    },[])


  return (
    <div>

        <h1> {data.title} </h1>

        <p>{data.description}</p>

        <img src={data.thumbnail}/>

        {/* <img  src={data.images[0]}/>
        <img  src={data.images[1]}/> */}


    </div>
  )
}
