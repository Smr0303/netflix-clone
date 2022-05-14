import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl ,isLarge}) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setmovies(requests.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1> {title}</h1>
      <div className="row_posters">
        {console.log(movies.length)}
        {movies.map((movie) => {
          return (
            <img key={movie.id}
              className={isLarge?"row_poster row_posterLarge":"row_poster "}
              src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`}
              alt={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
