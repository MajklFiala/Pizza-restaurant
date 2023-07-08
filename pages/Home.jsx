import React from 'react'
import { useState } from "react";
import "../CSS/Home.css"
import { Link } from 'react-router-dom'
import Inside from "../images/Inside.jpg"
import Inside2 from "../images/Inside2.jpg"
import Inside3 from "../images/Inside3.jpg"
import Pizza2 from '../images/Pizza2.jpg'
import Hawai from '../images/PizzaHawai.jpg'
import Lasagne from '../images/Lasagne.jpg'
import Tiramisu from '../images/Tiramisu.jpg'

import Photo1 from "../images/Photo1.jpg"
import Photo3 from "../images/Photo3.jpg"
import Photo4 from "../images/Photo4.jpg"
import Photo5 from "../images/Photo5.jpg"
import Photo6 from "../images/Photo6.jpg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Home() {

    const array = [Photo1, Photo3, Photo4, Photo5, Photo6]
    const [current, setCurrent] = useState(0)

    const arrowForward = () => {
        if (current == 4){
            setCurrent(0)
        }
        else{
            setCurrent(current + 1)
        }
    }

    const arrowBack = ()=>{
        if (current == 0){
            setCurrent(4)
        }
        else{
            setCurrent(current - 1)
        }
    }

  return (
    <>
    
    <div className='opening'>
      <img src={Pizza2} className='imgDiv'></img>

      <h1>Italian restaurant</h1>
      <h3>Since 1985</h3>
    </div>
    
    <div className='about'>
        <div className='images'>
            <img src={Inside} alt='inside' className='img1'></img>
            <img src={Inside2} alt='inside' className='img2'></img>
            <img src={Inside3} alt='inside' className='img3'></img>
            <Link to="/about" className='btn_as_link'>More about the restaurant</Link>
        </div>
        <div className='text'>
            <h2>U NÁS „VÍTE, CO JÍTE“ A „VÍTE, CO PIJETE“</h2>
            <p>Přeneseme Vás do přátelské atmosféry francouzského venkova. Ochutnáte steaky z uzrálého hovězího masa od českých chovatelů, jehněčí z naší farmy v Myštěvsi a ovocné destiláty z naší Palírny Radlík.</p>
        </div>
    </div>
  
    <h1 className='spcMenu'>Special menu</h1>
    <div className='menu'>
        
        <div className='menuThreeDivs'>
            <Link to="/menu">Pizza Hawai</Link>
            <img src={Hawai} className='image1'></img>
        </div>
        <div className='menuThreeDivs'> 
            <Link to="/menu">Lasagne</Link>
            <img src={Lasagne} className='image2'></img>
        </div>
        <div className='menuThreeDivs'>
            <Link to="/menu">Tiramisu</Link>
            <img src={Tiramisu} className='image3'></img>
        </div>
    </div>

    <div className='photo'>
        <div className='PGName'>
            <Link to="/photogallery">Photogallery</Link>
        </div>
        <div className='photoRow'>
            <div className='ArrowBack'>
                <ArrowBackIosIcon onClick={arrowBack} />
            </div>
            <img src={array[current]} className='Image'></img>
            <div className='ArrowForward'>
                <ArrowForwardIosIcon onClick={arrowForward} />
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Home
