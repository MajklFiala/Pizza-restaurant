import React from 'react'
import '../CSS/Footer.css'
import {Link} from 'react-router-dom'
import Logo from '../images/Logo.jpg'

import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { OpenInBrowser } from '@mui/icons-material';

function Footer() {
  return (
    <>
    <div className='footerContainer'>
      <div className='footer'>
        <div className='footerAll footer-1'>
          <Link to="/" ><img src={Logo}></img></Link>
          <h3>PIZZA SLICE</h3>
        </div>
        <div className='footerAll footer-2'>
          <h3>Restaurant</h3>
          <Link to='/about'>About us</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/photogallery'>Photogallery</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='footerAll footer-3'>
          <h3>Contact</h3>
          <div className='contact'>
            <div className='contactIcon'>
            <LocationOnIcon className='Icon'/>
            <PhoneIcon className='Icon'/>
            <EmailIcon className='Icon'/>
            <ScheduleIcon className='Icon'/>
            
            </div>
            <div className='contactInfo'>
            <p>Brooklyn street</p>
            <p>+420 111 222 333</p>
            <p> restaurant@gmail.com</p>
            <div className='hours'>
            <p>Monday-Friday: 08:00-20:00</p>
            <p>Saturday: 08:00-22:00</p>
            <p>Sunday: closed</p>
            </div>
            </div>
          </div>
        </div>
        <div className='footerAll footer-4'>
          <h3>Social sites</h3>
          <div className='allIcons'>
          <a href='https://www.instagram.com/' target='_blank'><InstagramIcon className='Icon'/></a>
          <a href="https://cs-cz.facebook.com/" target='_blank'><FacebookIcon className='Icon'/></a>
          <a href="https://twitter.com/i/flow/login" target='_blank'><TwitterIcon className='Icon'/></a>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Footer
