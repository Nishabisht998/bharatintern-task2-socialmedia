import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <ul >
        <NavLink to={"/profile"} className="navlink mx-5" style={{fontSize:24, color:'green',fontWeight:'bold'}}> profile</NavLink>
        <NavLink to={"/create"} className="navlink mx-5"  style={{fontSize:24, color:'green',fontWeight:'bold'}}> new post</NavLink>
        </ul>
      </div>


    </div>
  )
}

export default Nav