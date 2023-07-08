import { useEffect } from "react";
import { useState } from "react";
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './CSS/BackToTopButton.css'

function BackToTopButton() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 2200){
                setShow(true)
            }
            else{
                setShow(false)
            }

        })
    }, [])

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
  return (
    <>
    {show && (<ArrowUpwardIcon className="arrow" onClick={ScrollUp}/>)}
    </>
  )
}

export default BackToTopButton
