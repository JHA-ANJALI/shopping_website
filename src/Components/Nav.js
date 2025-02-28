import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import SearchIcon from '@mui/icons-material/Search';
import '../CSS/Nav.css'

export default function Nav() {
  
  return (
    <div className='navv container-fluid fixed-top  position-relative  top-0 d-flex ' style={{zIndex:"998", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)", backgroundColor:"white" }}>
 <nav className=" container-fluid navbar  navbar-expand-lg bg-body-tertiary mt-0">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold mx-5 fs-2" to='/'>Shopify</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <form className="d-flex mx-5" role="search">
        <input className="form-control me-2  border border-success rounded-pill fw-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success rounded-pill" type="submit"><SearchIcon></SearchIcon></button>
      </form>


      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold fs-5 ms-auto">
        <li className="nav-item mx-3  ">
          <Link className="nav-link active" aria-current="page" to='/product'>Product</Link>
        </li>

        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to='/category'>Category</Link>
        </li>

        <li className="nav-item mx-3  ">
          <Link className="nav-link active" aria-current="page" to='/productss'>Productss</Link>
        </li>

        <li className="nav-item mx-3 text-algin-centre">
          <Link className="nav-link active bg-terniary" aria-current="page"  to='/login' ><Person2RoundedIcon className='fs-5'/>Login</Link>
        </li>

        <li className="nav-item ms-3">
          <Link className="nav-link active" aria-current="page" to='/cart'><ShoppingCartOutlined className='fs-3 fw-4'/> </Link>
        </li>

      </ul>
      


      {/* <form className="d-flex fw-bold fs-5" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/login'>Logout</Link>
        </li>
      
      </ul>
      </form> */}

    </div>

  </div>
</nav>


   
    </div>


    
  )
}

