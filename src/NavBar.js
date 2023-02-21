import React from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
export default function NavBar(){
  return (
    <>
    <div className="navMenu">
    <NavLink className="notActive" exact activeClassName="active" to="/">Home</NavLink>
    <NavLink className="notActive" activeClassName="active" to='/about'>About</NavLink>
    <NavLink className="notActive" activeClassName="active" to='/contact'>Contact</NavLink>
    </div>
    </>
  )
}