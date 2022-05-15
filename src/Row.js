import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("")
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setmovies(requests.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handleClick=(movie)=>{
    if (trailerUrl) {
      setTrailerUrl('');
    }else{
        movieTrailer(movie?.title|| movie.name ||movie.original_name||"")
        .then((url)=>{
           const urlParams=new URLSearchParams(new URL(url).search);
           console.log(url);
           setTrailerUrl(urlParams.get('v'));
        }).catch(error=>console.log(error));
    }
}
  return (
    <div className="row">
      <h1> {title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
            onClick={()=>handleClick(movie)}
              key={movie.id}
              className={isLarge ? "row_poster row_posterLarge" : "row_poster "}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          );
        })}
      </div>
      {trailerUrl&&<YouTube videoId={trailerUrl }opts={opts}/>}
    </div>
  );
}

export default Row;
