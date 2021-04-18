import React from 'react'
import './NavBar.css'
import logo from '../../images/logo.png'
import CartWidget from './CartWidget'

const NavBar = () => {
  return(
    <>
      <nav className="navbar">
        <a href=""><img src={logo} alt="Home"/></a>
        <ul>
          <li><a href="">Productos</a></li>
          <li><a href="">Nosotros</a></li>
          <li><a href="">Contacto</a></li>
          <li><a href=""><CartWidget/></a></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar