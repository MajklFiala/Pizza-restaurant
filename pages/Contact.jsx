import React from 'react'
import '../CSS/Contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
  return (
    <>
    <div className='Box'>
        <div className='Wrap'>
          <div className='icon'><PhoneIcon ></PhoneIcon></div>
          <p className='title'>PHONE</p>
          <p>+420 111 222 333</p>
        </div>
        <div className='Wrap'>
          <div className='icon'><EmailIcon></EmailIcon></div>
          <p className='title'>EMAIL</p>
          <p>restaurant@gmail.com</p>
        </div>
        <div className='Wrap'>
          <div className='icon'><AccessTimeIcon></AccessTimeIcon></div>
          <p className='title'>OPENING HOURS</p>
          <div className='hours'>
            <p>Monday-Friday: 08:00-20:00</p>
            <p>Saturday: 08:00-22:00</p>
            <p>Sunday: closed</p>
          </div>
        </div>
        <div className='Wrap'>
          <div className='icon'><InstagramIcon></InstagramIcon></div>
          <p className='title'>INSTAGRAM</p>
          <p>restaurant@gmail.com</p>
        </div>
        <div className='Wrap'>
          <div className='icon'><FacebookIcon></FacebookIcon></div>
          <p className='title'>FACEBOOK</p>
          <p>restaurant@gmail.com</p>
        </div>
        <div className='Wrap'>
          <div className='icon'><TwitterIcon></TwitterIcon></div>
          <p className='title'>TWITTER</p>
          <p>restaurant@gmail.com</p>
        </div>
        
    </div>
    <div className='Map'>
      <p>FIND US</p>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1434.7030066686027!2d-73.93808320931582!3d40.67553808918889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b873fa274a5%3A0xa419ad49a0659cfc!2s1415%20Bergen%20St%2C%20Brooklyn%2C%20NY%2011213%2C%20Spojen%C3%A9%20st%C3%A1ty%20americk%C3%A9!5e0!3m2!1scs!2scz!4v1688750993320!5m2!1scs!2scz"></iframe>
    </div>

    </>
  )
}

export default Contact

//<iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1434.7030066686027!2d-73.93808320931582!3d40.67553808918889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b873fa274a5%3A0xa419ad49a0659cfc!2s1415%20Bergen%20St%2C%20Brooklyn%2C%20NY%2011213%2C%20Spojen%C3%A9%20st%C3%A1ty%20americk%C3%A9!5e0!3m2!1scs!2scz!4v1688750993320!5m2!1scs!2scz" width="400" height="250"></iframe>