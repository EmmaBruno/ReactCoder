import React from 'react'
import './NavBar.css';
import logo from '../../images/cart.jpg'

const CartWidget = () => {
  return(
      <a href=""><img className="cart" src={logo} alt="cart"/>CARRITO</a>
  )
}

export default CartWidget