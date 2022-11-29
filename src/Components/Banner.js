import React, { useEffect } from 'react'
import "./Banner.css"
import { API_KEY } from '../Constants/Constant'
import axios from "./Components/axios"
function Banner() {
    useEffect(()=>{
        axios.get("trending/all/week?api_key=${API_KEY}&language=en-US").then((response)=>{
            console.log(response.data)
        })
    },[])
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <botton className="button">Play</botton>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>In publishing and graphic design uiuhu euhuehufe ehfejhygc cftctfy ytgftrdrt</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}
export default Banner
