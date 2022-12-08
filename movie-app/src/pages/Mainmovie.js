import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap";

import style from "./Mainmovie.module.css";
import tmdbAPI from "../tmdbAPI";


function MainMoive() {
    let [movie, setMovie] = useState([]); // 가져올 영화 담을 배열
    const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300'; // 영화 이미지 baseURL
    let navigate = useNavigate();

    useEffect(() => {
        tmdbAPI.get('movie/popular', {
            params: {
                page: 7
            }
        })
            .then(res => {
                // console.log(res.data.results);
                setMovie(res.data.results);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, [])
    console.log(movie);



    return (
        <>
            {/* 영화렌더링 영역 */}
            <div className={style.container}>
                <div className={style.popular}>
                    <h4 style={{ color: 'white' }}>Popular</h4>
                </div>
                {
                    movie.map((movie, i) => {
                        return (

                            <div key={i}>
                                <div className={style.movieCard}>
                                    <img className={style.moviePoster} src={`${API_IMAGEURL}${movie.poster_path}`} onClick={ ()=>{navigate(`Detail/${movie.id}`)}}/>
                                    <div className={style.title}>{movie.title}</div>
                                    <div className={style.release_date}>{movie.release_date}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );

}

export default MainMoive;