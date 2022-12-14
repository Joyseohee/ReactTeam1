import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.scss";
import Loading from "../components/loading";
import tmdbAPI from "../tmdbAPI";
import Video from "./Video";
import DetailContent from "./DetailContent";
import ReactPlayer from "react-player";
import ClickLikes from "../components/Detail/ClickLikes";
import { Nav } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import ReviewMain from "./ReviewMain";
import clock from "../images/clock.png";
import percent from "../images/100-percent.png";
import like from "../images/like.png";
import Top from "../components/Common/top";
import Trailers from "./Trailers";
import Similar from "./Similar";

function Detail() {
  let id = useParams();
  const [movie, setMovie] = useState([]);
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

  console.log(id.id);
  const [load, setLoad] = useState(null);
  const [video, setVideo] = useState([]);
  const [movieKey, setMoviekey] = useState();
  const [genre, setGenre] = useState([]);
  const [company, setCompany] = useState([]);
  const navigate = useNavigate();
  const [nameReview, setNameReview] = useState([]);

  const getDetailmv = async () => {
    setLoad(true); // 로딩 시작
    const res = await tmdbAPI.get(`movie/${id.id}`);
    if (res.data) {
      setMovie(res.data);
      console.log(res.data);
    } else {
    }
    setLoad(false); // 로딩 종료
  };

  // 장르 받아오기
  const getGenre = async () => {
    setLoad(true); // 로딩 시작
    const res = await tmdbAPI.get(`movie/${id.id}`);
    if (res.data) {
      setGenre(res.data.genres);
      console.log(res.data.genres);
    } else {
    }
    setLoad(false); // 로딩 종료
  };

  // 제작사 받아오기
  const getCompany = async () => {
    setLoad(true); // 로딩 시작
    const res = await tmdbAPI.get(`movie/${id.id}`);
    if (res.data) {
      setCompany(res.data.production_companies);
    } else {
    }
    setLoad(false); // 로딩 종료
  };

  useEffect(() => {
    getDetailmv();
    getGenre();
    getCompany();
  }, []);

  let [clickTab, setClickTab] = useState(0);

  useEffect(() => {
    tmdbAPI
      .get(`movie/${id.id}/videos`, { params: { language: "en-US" } })
      .then((res) => {
        console.log(res.data.results);
        setVideo(res.data.results);
        setMoviekey(res.data.results[0].key);
      });
  }, []);
  console.log("movieKey: " + movieKey);

  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className={style.back}>
          <div className={style.header}>
            <div
              className={style.inner}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className={style.img_wrapper}>
                <div className={style.box}>
                  <img
                    className={style.img}
                    src={`${API_IMAGEURL}${movie.poster_path}`}
                  />

                  <span className={style.text}>
                    <a
                      href={`https://www.themoviedb.org/movie/${movie.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TMDB로 보기
                    </a>
                  </span>
                </div>
                <section className={style.info_wrapper}>
                  <span className={style.title}>{movie.title}</span>
                  <span className={style.release_date}>
                    {" "}
                    ( {movie.release_date} ){" "}
                  </span>
                  <br />
                  <div>
                    {genre.map((genre, i) => {
                      return (
                        <span key={i} className={style.genre}>
                          {
                            <span>
                              <span>{genre.name}</span>
                            </span>
                          }
                        </span>
                      );
                    })}
                  </div>
                  <br />
                  <span>
                    <img src={clock} className={style.runtime_img} />{" "}
                  </span>
                  <span className={style.runtime}>{movie.runtime} 분</span>
                  <span>
                    <img src={percent} className={style.vote_average_img} />{" "}
                  </span>
                  <span className={style.vote_average}>
                    {movie.vote_average}
                  </span>
                  <span>
                    <ClickLikes id={id} like={like} style={style} />
                  </span>
                  <span className={style.vote_count}>좋아요</span> <br />
                  <br />
                  <span className={style.tagline}>{movie.tagline}</span>
                  <br />
                  <br />
                  <span className={style.overview}>{movie.overview}</span>
                  <br />
                  <br />
                  <button className={style.playbutton} onClick={onClickButton}>
                    트레일러 보기
                  </button>
                  <div className={style.player}>
                    {isOpen && (
                      <Video
                        open={isOpen}
                        movieKey={movieKey}
                        style={style}
                        onClose={() => {
                          setIsOpen(false);
                        }}
                      />
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className={style.nav}>
            <Nav fill variant="tabs" defaultActiveKey="link-0">
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setClickTab(0);
                  }}
                  eventKey="link-0"
                >
                  상세정보
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setClickTab(1);
                  }}
                  eventKey="link-1"
                >
                  관련소식
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setClickTab(2);
                  }}
                  eventKey="link-2"
                >
                  실관람평
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <TabContent clickTab={clickTab} movies={movie} company={company} />
          </div>
          <Top></Top>
        </div>
      )}
    </>
  );
}

function TabContent(props) {
  const [review1, setReview1] = useState([]); // 가져올 영화 담을 배열
  console.log(props.clickTab);
  const movieId = props.movies.id;
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w200";

  console.log("movieId" + props.movies.id);

  if (props.clickTab == 0) {
    return (
      <>
        <DetailContent movieId={movieId} />
        <hr />
        <h2 style={{ color: "white" }}>제작사</h2>
        <div>
          {props.company.map((company, i) => {
            return (
              <span key={i} className={style.genre}>
                {
                  <span>
                    {company.logo_path == null ? (
                      <span style={{ color: "white" }}>로고없음</span>
                    ) : (
                      <img
                        className={style.logo}
                        src={`${API_IMAGEURL}${company.logo_path}`}
                      />
                    )}
                    <span> {company.name} </span>
                  </span>
                }
              </span>
            );
          })}
        </div>
        <hr />
        <h2 style={{ color: "white" }}>수익</h2>
        <h2 style={{ color: "white" }}>${props.movies.revenue}</h2>
        <hr />
        <Trailers movieId={movieId} />
        <hr />
        <Similar movieId={movieId} />
        <hr />
      </>
    );
  }
  if (props.clickTab == 1) {
    return <div style={{ color: "white" }}>{props.movies.tagline}</div>;
  }
  if (props.clickTab == 2) {
    return (
      <div style={{ color: "white" }}>
        {props.movies.production_companies[0].name}
        <ReviewMain></ReviewMain>
      </div>
    );
  }
}

export default Detail;
