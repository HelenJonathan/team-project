import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.jpg'
import './NavbarStyles.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Podcast</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <div className="btn-contain">
          <Link className="btnSign btnSignin" to="/sign-in">
            Sign In
          </Link>
          <Link className="btnSign" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
