import React from 'react'
import './Nav.css'
import Logo from "../../assets/images/logo.svg";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";

const Nav = ({ toggler }) => {
  return (
    <nav id="nav">
        <div className='nav-left'>
            <img src={Logo} alt="logo" className='vertical-align-middle' />
            <span className="logo-text fs-15 fw-800">Meals</span>
        </div>
        <div className='nav-right'>
            <AiOutlineShoppingCart className='cart-icon' />
            <AiOutlineMenu onClick={toggler} />
        </div>
    </nav>
  )
}

export default Nav