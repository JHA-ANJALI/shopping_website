import React from 'react';
import '../CSS/Home.css';
import Foursmallbox from '../Components/Home/Foursmallbox';
import Map from '../Components/Home/Map';
import Mapp from '../Components/Home/Mapp';
import Footer from '../Components/Footer';

export default function Home() {




  return (
    <div className='d-flex flex-wrap ' >
      <div className='home container-fluid d-flex flex-wrap'>
            <div className='col-xl-6 col-lg-6 col-sm-10 col-md-6 pt-5 ps-5'>
            <p className='a fs-6'>Starting At $999</p>
        <h1 className='fs-1'>The best notebook<br></br> collection 2024</h1>
        <p className='fs-4'>Exclusive offer <span className='text-danger'>-10%</span> off this week</p>
        <button type="button" class="b btn btn-light rounded-pill mx-3">Shop Now</button>
      </div>
      <div className='col-xl-6 col-lg-6 col-sm-10 col-md-4 pt-5 '><img src='https://shopify-xrh7.onrender.com/hero.png'></img></div>
    </div>



    <div className='container-fluid   d-flex flex-column '>
    <Foursmallbox/>
    <Map/>
    <div className='im container  d-flex flex-wrap my-5 '>
    <div className='bimage col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'></div>
    <div className='btext text-center col-xl-6 col-lg-6 col-sm-12 col-md-12 col-12 pt-5' style={{backgroundColor:"#d2e3f1" , padding:"20px"}}>
    <h1 className=''>Don't miss the offer Grab it now</h1>
    <button type="button" class="b btn btn-light rounded-pill mx-3 my-2" >Shop Now</button>
    </div>
    </div>

    <Mapp/>
    </div>

 







    </div>
  )
}
