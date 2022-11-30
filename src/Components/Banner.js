import React, { useEffect, useState } from 'react'
import "./Banner.css"
import { API_KEY,imageUrl } from '../Constants/Constant'
import axios from "./axios";
function Banner() {
    const[movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])
            setMovie(response.data.results[1])
        })
    },[])
  return (
    <div style={{backgrountImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='banner_buttons'>
                <botton className="button">Play</botton>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}
export default Banner
