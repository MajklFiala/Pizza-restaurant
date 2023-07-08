
import Salami from './menuimages/Salami.jpg'

import React from 'react'
import './CSS/Pizza.css'

export default function Pizza(props) {


  return (
    <div className="Container">
            <div className="ItemPhoto">
                <img src={props.image}></img>
            </div>
            <div className="ItemText">
                <div className='name'>{props.name}</div>
                <div className='info'>{props.info}</div>
                <div className="Price">{props.price}</div>
            </div>
    </div>)
  
}




