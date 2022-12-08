import { useEffect, useState, createContext } from "react";
import tmdbAPI from "../tmdbAPI";
import Detail from "./Detail";
import {useNavigate, Route, Routes, Link} from 'react-router-dom';

export let stockContext = createContext()

function DetailPage(){
    console.log("상세페이지");
    let navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300';

    useEffect(()=>{
        tmdbAPI.get('movie/popular')
        .then(res => {
            console.log(res.data.results);
            setMovie(res.data.results);
        })
    },[])

    return(
        <div>
            <h4>상세페이지</h4>
            {
                movie.map((movie, i)=>{
                    return(
                        <div key={i}>
                        <img onClick={()=>{navigate(`/detail/${movie.id}`)}}
                            src={`${API_IMAGEURL}${movie.poster_path}`} />
                        {/* <Link to={`/detail`}>
                            <img src={`${API_IMAGEURL}${movie.poster_path}`} />
                        </Link> */}
                        <div>{movie.title}</div>
                        <div>{movie.overview}</div>
                        <div></div>
                    </div>
                );
            })
        }
        </div>
    )
    }
export default DetailPage;