import React from 'react'
import "./Header.css";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import Heroslider from './Heroslider';
import logo from "../assets/logo.jpg"
const Header = () => {
  return (
    <>
    
    <header>
        <div className="head">
          <img src={logo} className="himg" alt=""/>

          <nav className="navnav">
          <Link to="/job" className="memw">jobs</Link>
          <a href="#abc" className="memw">gallery</a>
          <a href="#topcompanies" className="memw"> top companies</a>
        </nav>

      <div className="dropdown">
            <MdOutlineMenu className='menu-icon'/>
        <div className="dropdown-content">
        <Link to="/job" className="hover-nav">jobs</Link>
        <a href="#abc"  className="hover-nav">gallery</a>
          <a href="#topcompanies" className="hover-nav">top companies</a> 
        </div>
      </div>
    </div>
    </header>
    <div className="spave">

    </div>

    <Heroslider/>
    <div className="spave">

</div>

    </>
  )
}

export default Header