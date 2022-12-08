import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import tmdbAPI from "../tmdbAPI";

function Detail(){

     let id = useParams();
     const [movie, setMovie] = useState([]);
     const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300';
    
    console.log(id.id);

    useEffect(()=>{
        tmdbAPI.get(`movie/${id.id}`)
        .then(res => {
            console.log(res.data);
            setMovie(res.data);
        })
    },[])

    console.log(movie.production_companies[0].name)

    return(
        <div>
            <h3>{movie.title}</h3>
            <img src={`${API_IMAGEURL}${movie.poster_path}`} />
        </div>
    )
}

export default Detail;