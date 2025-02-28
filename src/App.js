import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Product from './Pages/Product'
import Productss from './Pages/Productss'
import Category from './Pages/Category'
import Login from './Components/Login'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import { Provider } from 'react-redux'
import store from './redux/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/productss' element={<Productss/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Productss/:category/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  )
}
