import { useEffect, useState } from "react";
import Search from "./components/search";
import tmdbAPI from "./tmdbAPI";

function RenderMovie(){
    
    const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300';
    
    // 가져올 영화 담을 배열
    const [movie, setMovie] = useState([]);
    const setData = (movie) => {
        setMovie(movie);
    }
    useEffect(()=>{
        if(movie.length) {
            return;
        }

        tmdbAPI.get('movie/popular')
        .then(res => {
            setMovie(res.data.results);
        })
    },[])
    return(
        <div>
            {Search(setData)}
            {  
                movie.map((movie, i)=>{
                    return(
                        <div key={i}>
                            <img src={`${API_IMAGEURL}${movie.poster_path}`} />
                            <div>{movie.title}</div>
                            <div></div>
                        </div>
                    );
                })
            }       
        </div>
    );
}

export default RenderMovie;
