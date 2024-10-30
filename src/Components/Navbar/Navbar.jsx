import React from "react";
import { useState } from "react";
import './Navbar.css'
import Olalogo from '../Assets/Olalogo.png'
import cart from '../Assets/cart.png'
import { Link } from "react-router-dom";


const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={Olalogo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Man")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="Man"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Woman")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==="Woman"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Teens")}}><Link style={{textDecoration: 'none'}} to='/Teens'>Teens</Link>{menu==="Teens"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar