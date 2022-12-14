import React, { useEffect, useState } from 'react'
import requests from '../backend/requests';
import axios from '../backend/axios'
import "../CSS/baner.css"

function Baner() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request
        }
        fetchData();
    },[])

    console.log(movies)

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + " . . ." : str;
    }
  return (

    <header className='banner'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center"
    }}
    >
        <div className='banner_cont'>
            <h1 className='banner_title'>
                {movies?.title || movies?.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>
                {truncate(movies?.overview,150)}
            </h1>
        </div>
        <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Baner
