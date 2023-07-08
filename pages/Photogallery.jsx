import React from 'react'
import '../CSS/Photogallery.css'

import Photo1 from '../PhotoGallery/P1.jpg'
import Photo2 from '../PhotoGallery/P2.jpg'
import Photo3 from '../PhotoGallery/P3.jpg'
import Photo4 from '../PhotoGallery/P4.jpg'
import Photo5 from '../PhotoGallery/P5.jpg'
import Photo6 from '../PhotoGallery/P6.jpg'
import Photo7 from '../PhotoGallery/P7.jpg'
import Photo8 from '../PhotoGallery/P8.jpg'
import Photo9 from '../PhotoGallery/P9.jpg'

function Photogallery() {
  return (
    <div className='grid'>
        <img src={Photo1}></img>
        <img src={Photo2}></img>
        <img src={Photo3}></img>
        <img src={Photo4}></img>
        <img src={Photo5}></img>
        <img src={Photo6}></img>
        <img src={Photo7}></img>
        <img src={Photo8}></img>
        <img src={Photo9}></img>
      
    </div>
  )
}

export default Photogallery
