import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Logo from './images/Logo.jpg'
import './CSS/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './pages/Menu';


const Navbar = () => {
  const [show,setShow] = useState(false)

  return (
    <div className="navbar">
      <div className={show===true ? "leftSideGone" : "leftSide"}>
        <Link to="/">
        <img src={Logo}></img>
        </Link>
        <h3>PIZZA SLICE</h3>
      </div>
      <div className="rightSide">
        <Link to="/menu" >MENU</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/photogallery">PHOTOGALLERY</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
      <MenuIcon className="menuIcon" onClick={() => {setShow(!show)}} fontSize='large'/>
      <div className={show===true ? "SmallMenu" : "smallMenu"}>
        <Link to="/menu" >MENU</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/photogallery">PHOTOGALLERY</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  )
}

export default Navbar
