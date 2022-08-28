import React from 'react'
import './MenuTab.css'

const MenuTab = () => {
  return (
    <div className="tab">
        <button className="menu-item active">All</button>
        <button className="menu-item">Rice</button>
        <button className="menu-item">Beans</button>
        <button className="menu-item">Fries</button>
        <button className="menu-item">swallow</button>
        <button className="menu-item">others</button>
    </div>
  )
}

export default MenuTab