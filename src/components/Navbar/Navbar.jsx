import React, { useContext, useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/Assets/logo.png'
import cart_logo from '../Assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const { getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
   <div className="nav-logo">
    <img src={Logo} alt="" />
    <p>SHEDOH</p>
   </div>
   <ul className="nav-menu">
    <li onClick={()=>{setMenu("shop")}}> <Link style={{ textDecoration: "none"}} to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("mens")}}> <Link style={{ textDecoration: "none"}} to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("womens")}}> <Link style={{ textDecoration: "none"}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: "none"}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
   </ul>
   <div className="nav-login-cart">
    <Link to="/login"><button>login</button></Link>
    <Link to="/cart"><img src={cart_logo} alt="" /></Link>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
   </div>
    </div>
  )
}

export default Navbar