import React, {useEffect, } from 'react'
import Logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom'

function Splash() {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/welcome")
        },"5000")
    })


  return (
    <div className='flex justify-center pt-44'>
        <img src={Logo}/>
    </div>
  )
}

export default Splash