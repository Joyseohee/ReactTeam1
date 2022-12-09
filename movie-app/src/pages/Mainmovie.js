import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap";

import style from "./Mainmovie.module.css";
import tmdbAPI from "../tmdbAPI";


function MainMoive() {
    const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300'; // 영화 이미지 baseURL
    const [movie, setMovie] = useState([]); // 가져올 영화 담을 배열

    const [page, setPage] = useState(1); // 화면에 출력할 페이지(max 500)

    const observerRef = useRef(null); // endpage 체크
    const [load, setLoad] = useState(false); // 로딩 스피너
    const preventRef = useRef(true); // 옵저버 중복 실행 방지
    const endRef = useRef(false);

    const navigate = useNavigate();


    // 영화 출력 함수
    const getMovie = async () => {
        const movies = await tmdbAPI.get('movie/popular', { params: { page: `${page}` } })
        let temp = [...movie, ...movies.data.results];
        setMovie(temp);
    }


    useEffect(() => {
        getMovie()
    }, [])
    // console.log(movie);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>


            {/* 영화렌더링 영역 */}
            <div className={style.container}>
                <div className={style.popular}>
                    <h4 style={{ color: 'white' }}>Popular</h4>
                </div>
                {
                    movie &&
                    <>
                        {
                            movie.map((movie, i) => {
                                return (


                                    <div key={i}>
                                        <div className={style.movieCard}>
                                            <img className={style.moviePoster} src={`${API_IMAGEURL}${movie.poster_path}`} onClick={() => { navigate(`detail/${movie.id}`) }} />
                                            <div className={style.title}><h5>{movie.title}</h5></div>
                                            <div className={style.release_date}>{movie.release_date}</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </>
                }
            </div>
        </>
    );

}

export default MainMoive;