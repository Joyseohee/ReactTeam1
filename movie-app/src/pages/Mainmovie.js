import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Mousewheel } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import style from "./Mainmovie.module.css";
import tmdbAPI from "../tmdbAPI";
import Search from "./Search";
import Loading from "../components/loading";
import Header from "../components/header";
import Top from "../components/Common/top"

function MainMoive() {
    const API_IMAGEURL = "https://image.tmdb.org/t/p/w300"; // 영화 이미지 baseURL
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]); // 가져올 영화 담을 배열
    const [coming, setComing] = useState([]);

    const [page, setPage] = useState(1); // axios param전달해줄 페이지
    const [load, setLoad] = useState(false); // 로딩 성공/실패
    const preventRef = useRef(true); // 중복 실행 방지
    const observerRef = useRef(null); // observer Element(옵저버 타겟 대상 담을 곳)


    // 옵저버 생성 및 타겟(div) 지정
    useEffect(() => {
        AOS.init();
        getUpcoming();
        const observer = new IntersectionObserver(obCallback, { threshold: 0.5 });
        if (observerRef.current) observer.observe(observerRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    // 옵저버 콜백함수
    const obCallback = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && preventRef.current) {
            preventRef.current = false;
            setPage((prev) => prev + 1);
        }
    };

    // 페이지 값 변경될 때 마다 재렌더링
    useEffect(() => {
        getMovie();
    }, [page]);

    // popular 영화 출력
    const getMovie = useCallback(async () => {
        setLoad(true); // 로딩 시작
        const movies = await tmdbAPI.get('movie/popular', { params: { page: `${page}` } });
        if (movies.data) {
            let temp = [...movie, ...movies.data.results];
            setMovie(temp);
            preventRef.current = true;
        } else {
            console.log("error");
        }
        setLoad(false); // 로딩 종료
    }, [page]);

    const setData = (movie) => {
        setMovie(movie);
    };

    // upcoming 영화 출력
    const getUpcoming = async () => {
        const comovie = await tmdbAPI.get('movie/upcoming', { params: { page: 1 } });
        setComing(comovie.data.results)
    }

    return (
        <>
            {/* 헤더 */}
            <Header />
            {Search(setData)}

            {/* upcoming */}
            <div className={style.upcoming}>
                <h4>Upcoming</h4>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 10, // 회전각도
                    stretch: 0,
                    depth: 100, // 깊이감도
                    modifier: 2, // 
                    slideShadows: true,//선택한 부분 밝게 나머지는 그늘지게
                }}
                navigation={true} // 내비게이션 버튼
                mousewheel={true} // 마우스 휠
                modules={[EffectCoverflow, Mousewheel, Navigation]}
                className="mySwiper"
            >

                <div className="container">
                    {
                        coming &&
                        coming.map((coming, i) =>
                            <SwiperSlide key={i}>
                                <div className={style.swipercard}>
                                    <img src={`https://image.tmdb.org/t/p/w500${coming.poster_path}`} onClick={() => { navigate(`detail/${coming.id}`) }} />
                                    <div className={style.swiperTitle}>{coming.title}</div>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </div>
            </Swiper>

            {/* popular */}
            <div className={style.container}>
                <div className={style.popular}>
                    <h4>Popular</h4>
                </div>

                {
                    movie &&
                    <>
                        {
                            movie.map((movie, i) => {
                                return (
                                    <div key={i}>
                                        <div className={style.movieCard}>
                                            <img data-aos="slide-up" className={style.moviePoster} src={`${API_IMAGEURL}${movie.poster_path}`} onClick={() => { navigate(`detail/${movie.id}`) }} />
                                            <div className={style.title}><div>{movie.title}</div></div>
                                            {/* <div className={style.release_date}>{movie.release_date}</div> */}
                                        </div>
                                    </div>
                                );
                            })
                        }


                    </>
                }
                {
                    load ? <Loading /> : <></>
                }
                        
                <div>
                    <div ref={observerRef} className="Observer"></div>
                </div>
            </div>
            <Top/>
        </>
    );

}

export default MainMoive;
