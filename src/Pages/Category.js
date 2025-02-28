import React from 'react'

export default function Category() {

  const array=[
    {
      Title:"Beauty",
      text:"View products"
  },
  {
    Title:"Beauty",
    text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},
{
  Title:"Beauty",
  text:"View products"
},

]
  return (
    <div className='container-fluid d-flex flex-wrap justify-content-center my-3' style={{maxHeight:"100vh"}}>
   {
    array.map(function(value,index){
    return(
      <div className='col-xl-2 text-center p-3' style={{margin:"6px" ,backgroundColor:"#F5F7F8"}}>
      <p>{value.Title}</p>
      <a href="#">{value.text}</a>
    </div>
    )
   })
   }
    </div>
  )
}
