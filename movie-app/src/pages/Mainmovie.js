import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "aos/dist/aos.css";
import style from "./Mainmovie.module.css";
import tmdbAPI from "../tmdbAPI";
import Search from "../components/Search/Search";
import Loading from "../components/loading";
import Header from "../components/header";

function MainMoive() {
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w300"; // 영화 이미지 baseURL
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]); // 가져올 영화 담을 배열

  const [page, setPage] = useState(1); // axios param전달해줄 페이지
  const [load, setLoad] = useState(false); // 로딩 성공/실패
  const preventRef = useRef(true); // 중복 실행 방지
  const observerRef = useRef(null); // observer Element(옵저버 타겟 대상 담을 곳)

  useEffect(() => {
    AOS.init();
  }, []);

  // 옵저버 생성 및 타겟(div) 지정
  useEffect(() => {
    const observer = new IntersectionObserver(obCallback, { threshold: 0.5 });
    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // 옵저버 콜백함수
  const obCallback = (entries) => {
    const target = entries[0];
    console.log(entries);
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  // 페이지 값 변경될 때 마다 재렌더링
  useEffect(() => {
    getMovie();
  }, [page]);

  // 영화 출력 함수
  const getMovie = useCallback(async () => {
    setLoad(true); // 로딩 시작
    const movies = await tmdbAPI.get("movie/popular", {
      params: { page: `${page}` },
    });
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

  const setData = (movie) => {
    setMovie(movie);
  };

  return (
    <>
      {/* 헤더 */}
      <Header />
      {Search(setData)}

      {/* 영화렌더링 영역 */}
      <div className={style.container}>
        <div className={style.popular}>
          <h4 style={{ color: "white" }}>Popular</h4>
        </div>

        {movie && (
          <>
            {/* {
                            movie.map((movie, i) => {
                                return (
                                    <div key={i}>
                                        <div className={style.movieCard}>
                                            <img data-aos="slide-up" className={style.moviePoster} src={`${API_IMAGEURL}${movie.poster_path}`} onClick={() => { navigate(`detail/${movie.id}`) }} />
                                            <div className={style.title}><h5>{movie.title}</h5></div>
                                            <div className={style.release_date}>{movie.release_date}</div>
                                        </div>
                                    </div>
                                );
                            })
                        } */}

            {movie.map((movie, i) => {
              return (
                //     <Card sx={{ maxWidth: 345 }}>
                //     <CardActionArea>
                //       <CardMedia
                //         component="img"
                //         height="140"
                //         image={`${API_IMAGEURL}${movie.poster_path}`}
                //         alt="green iguana"
                //       />
                //       <CardContent>
                //         <Typography gutterBottom variant="h5" component="div">
                //           Lizard
                //         </Typography>
                //         <Typography variant="body2" color="text.secondary">
                //           Lizards are a widespread group of squamate reptiles, with over 6,000
                //           species, ranging across all continents except Antarctica
                //         </Typography>
                //       </CardContent>
                //     </CardActionArea>
                //   </Card>

                <div key={i}>
                  <div className={style.movieCard}>
                    <img
                      data-aos="slide-up"
                      className={style.moviePoster}
                      src={`${API_IMAGEURL}${movie.poster_path}`}
                      onClick={() => {
                        navigate(`detail/${movie.id}`);
                      }}
                    />
                    <div className={style.title}>
                      <h5>{movie.title}</h5>
                    </div>
                    <div className={style.release_date}>
                      {movie.release_date}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {load ? <Loading /> : <></>}
        <div ref={observerRef}>옵저버</div>
      </div>
    </>
  );
}

export default MainMoive;
