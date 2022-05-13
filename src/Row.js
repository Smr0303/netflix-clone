import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setmovies(requests.data.results);
      console.log(requests);
    }
    fetchData();
  }, [fetchUrl]);


  return (
    <div>
      <h1> {title}</h1>;
      {console.log(movies)}
    </div>
  );
}

export default Row;
