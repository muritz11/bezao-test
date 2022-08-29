import React from 'react'
import './Nav.css'
import Logo from "../../assets/images/logo.svg";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from 'react-icons/fi';

const Nav = ({ toggler }) => {
  return (
    <nav id="nav">
        <div className='nav-left'>
            <img src={Logo} alt="logo" className='vertical-align-middle' />
            <span className="logo-text fs-15 fw-800">Meals</span>
        </div>
        <ul className="d-md-show nav-links">
          <li><a href="/" className='active'>Home</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/" className='disabled'>Meal plans</a></li>
        </ul>
        <div className='nav-right'>
            <FiSearch className='cart-icon d-md-show fs-20' />
            <AiOutlineShoppingCart className='cart-icon fs-20' />
            <AiOutlineMenu onClick={toggler} className='d-md-none fs-20' />
            <button className="secondary-btn border-none d-md-show mr-11">sign in</button>
            <button className="primary-btn d-md-show">create account</button>
        </div>
    </nav>
  )
}

export default Nav