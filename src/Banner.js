import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
const base_url = "https://image.tmdb.org/t/p/original";

function Banner(){
const [movie,setmovie]=useState([]);


useEffect(()=>{
    async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOriginals);
        setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
    }
    fetchData();
},[]);



    return(
        <header className='banner' style={
            {
                backgroundSize:'cover',
                backgroundImage:`url(https://image.tmdb.org/t/p/original"${movie?.backdrop_path})`,
                backgroundPosition:"center center",
            }
        }> 

        <div className='banner_contents'>


{/*title*/}
<h1>   </h1>
{/* {div->2buttons} */}
{/* description */}

        </div>

        </header>
    )
}

export default Banner;