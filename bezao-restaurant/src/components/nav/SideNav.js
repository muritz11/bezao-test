import React from 'react'
import './SideNav.css'
import { GrFormClose } from "react-icons/gr";
import { FiHome } from "react-icons/fi";
import { AiOutlineShop, AiOutlineShoppingCart } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";

const SideNav = ({ toggler }) => {
  return (
    <nav id='sideNav'>
        <div className="txt-right">
            <GrFormClose className='fs-24' onClick={toggler} />
        </div>
        <div className="sidenav-content">
            <button className="primary-btn mr-11">create account</button>
            <button className="secondary-btn">sign in</button>
            <div className="nav">
                <p><a href="/"><FiHome className='mr-11' /> Home</a></p>
                <p><a href="/"><AiOutlineShop className='mr-11' /> Menu</a></p>
                <p><a href="/"><AiOutlineShoppingCart className='mr-11' /> My Tray</a></p>
                <p><a href="/" className='disabled'><RiTodoLine className='mr-11' /> Meal Plan</a></p>
            </div>
        </div>
    </nav>
  )
}

export default SideNav