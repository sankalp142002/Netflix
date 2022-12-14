import movieTrailer from 'movie-trailer';
import React, { useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from '../backend/axios'
import "../CSS/Row.css";


const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl, isLargeRow}) {
    const[movies, setMovies] = useState([]);
    const [trailer,setTrailer] = useState("")

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };

    const handleClick = (movie) => {
      if(trailer){
        setTrailer("");
      }
      else {
        movieTrailer(movie.title || movie.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
        setTrailer(urlParams.get('v'))
        })
        .catch((error) => console.log(error))
      }
    };

  return (
    <div className='row'>
      <h1>{title}</h1>

      <div className='row_posters'>
        {movies.map(movie => (
            <img 
            key={movie.id} 
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "large"} `}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.title || movie.name } 
            />
        ))}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opts} />}
    </div>
  )
}

export default Row

