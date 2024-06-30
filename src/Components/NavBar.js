import React from 'react'
import { Link } from 'react-router-dom'
import './component.scss';
import { useSelector } from 'react-redux';

export const NavBar = () => {
  const cartProducts = useSelector(state => state.cart) // this cart is coming from store.js reducer key name
  return (
    <nav>
        <ul>
            <li><Link to={`/products`}>Products</Link></li>
            <li><Link to={`/cart`}>My bag item {cartProducts.length }</Link></li>
        </ul>
    </nav>
  )
}
