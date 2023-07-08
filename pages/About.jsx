import React from 'react'
import image from '../images/AboutUS.jpg'
import '../CSS/AboutUs.css'

function About() {
  return (
    <>
    <div className='sheet'>
      <div className='OneImage'>
        <img src={image}></img>
      </div>
      <div className='paragraph'>
        <h3>About us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar et quam a consequat. Phasellus et bibendum diam, ac iaculis diam. Donec iaculis rhoncus orci, vitae euismod neque vehicula ac. Pellentesque consectetur, orci sed varius pellentesque, nisi lectus commodo ex, at imperdiet velit justo ut eros. Duis vitae neque ex. Nullam ornare felis et aliquet egestas. Praesent eget elit felis. Proin dignissim sagittis metus, id imperdiet neque pharetra at.</p>
        <p>Donec id velit libero. Vestibulum a elit sit amet erat mattis facilisis. Nunc pulvinar mauris sit amet risus auctor efficitur. Curabitur eget massa sit amet metus tincidunt fermentum a quis ligula. Maecenas volutpat sapien a urna pretium, eu varius ligula euismod. Nunc luctus orci ex, in tempus dolor sodales lacinia. Etiam semper eleifend nulla eu luctus. Phasellus vel fringilla ex. Praesent sit amet nisi condimentum, dictum libero eu, commodo sem. Mauris ornare lobortis ipsum quis placerat. Duis ut lacinia augue, dapibus sodales leo. Proin sit amet eros massa. Ut a lorem euismod, porta libero ac, elementum nisl.</p>
      </div>
    </div>
    </>
  )
}

export default About
