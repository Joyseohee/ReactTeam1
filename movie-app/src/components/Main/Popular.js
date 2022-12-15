import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";

import tmdbAPI from "../../tmdbAPI";
import Loading from "../loading";
import style from "./Popular.module.css";

function Popular() {
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w300"; // 영화 이미지 baseURL
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]); // 가져올 영화 담을 배열
  let [movdata, setMovdata] = useState([]); // 영화 데이터 담기
  const [page, setPage] = useState(1); // axios param전달해줄 페이지
  const [load, setLoad] = useState(false); // 로딩 성공/실패
  const preventRef = useRef(true); // 중복 실행 방지
  const observerRef = useRef(null); // observer Element(옵저버 타겟 대상 담을 곳)
  
  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/data.json`)
      .then((res) => {
        console.log(res);
        setMovdata(res.data.result);
      });
      
  }, []);

  
  // 옵저버 생성 및 타겟(div) 지정
  useEffect(() => {
    AOS.init();
    // getUpcoming();
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
    const movies = await tmdbAPI.get("movie/popular", {
      params: { page: `${page}` },
    });
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
                                            <img data-aos="slide-up" className={style.moviePoster} src={`${API_IMAGEURL}${movie.poster_path}`} onClick={() => { navigate(`/detail/${movie.id}`) }} />
                                            <div className={style.title}><div>{movie.title}</div></div>
                                            <div className={style.release_date}>{movie.release_date}</div>
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
    </>
  );
}

export default Popular;
