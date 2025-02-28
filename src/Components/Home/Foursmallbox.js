import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import './Foursmallbox.css'

export default function Foursmallbox() {
  const array = [
    {
      ic:<LocalShippingOutlinedIcon/>,
      name: "Free Delivery",
      text: "Order from all items",
    },
    {
      ic:<CurrencyExchangeRoundedIcon/>,
      name: "Return & Refund",
      text: "Money back gaurantee",
    },
    {
      ic:<DiscountOutlinedIcon/>,
      name: "Member Discount",
      text: "On order over $99",
    },
    {
      ic:<PermContactCalendarOutlinedIcon/>,
      name: "Support 24/7",
      text: "Contact us 24 hours a day",
    },
  ];


  return (
    <div className='b container   d-flex flex-wrap py-3 justify-content-center'>
      {
        array.map(function (value, index) {
          return (
            <div className='col-xl-5 col-lg-5  col-md-5 col-sm-5 col-11' style={{margin:"6px" ,backgroundColor:"#F5F7F8"}}>
              <p>{value.ic} {value.name}</p>
              <span>{value.text}</span>
            </div>
          );
        })
      }
    </div>
  );
}
