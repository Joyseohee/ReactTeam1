import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap";

import style from "./Mainmovie.module.css";
import tmdbAPI from "../tmdbAPI";


function MainMoive() {
    const API_IMAGEURL = 'https://image.tmdb.org/t/p/w300'; // 영화 이미지 baseURL
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]); // 가져올 영화 담을 배열

    const [page, setPage] = useState(1); // 화면에 출력할 페이지(max 500)
    const [load, setLoad] = useState(false); // 로딩 성공/실패
    const preventRef = useRef(true); // 중복 실행 방지
    const observerRef = useRef(null); // observer Element
    
    // 옵저버 생성 및 타겟(div) 지정
    useEffect(() => {
        const observer = new IntersectionObserver(obCallback, { threshold: 0.5 });
        if (observerRef.current) observer.observe(observerRef.current);
        return () => { observer.disconnect(); }
    }, []);

    // 옵저버 콜백함수
    const obCallback = ((entries) => {
        const target = entries[0];
        console.log(entries);
        if (target.isIntersecting && preventRef.current) {
            preventRef.current = false;
            setPage(prev => prev + 1);
        }
    })

    // 페이지 값 변경될 때 마다 재렌더링
    useEffect(() => {
        getMovie();
    }, [page]);

    // 영화 출력 함수
    const getMovie = useCallback(async () => {
        setLoad(true); // 로딩 시작
        const movies = await tmdbAPI.get('movie/popular', { params: { page: `${page}` } });
        console.log(movie.data);
        if (movies.data) {
            let temp = [...movie, ...movies.data.results];
            setMovie(temp);
            preventRef.current = true;
        } else {
            console.log("error");
        }
        setLoad(false); // 로딩 종료
    }, [page]);

    return (
        <>
            {/* 추후 컴포넌트화 할 헤더 */}
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
                <div ref={observerRef}>옵저버</div>
            </div>
        </>
    );

}

export default MainMoive;