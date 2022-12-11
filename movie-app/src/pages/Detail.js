import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.scss";
import Loading from "../components/loading";
import tmdbAPI from "../tmdbAPI";
import Video from "./Video";
import ReactPlayer from "react-player";
import ClickLikes from "../components/Detail/ClickLikes";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Review from "../components/Review/Review";

import clock from "../images/clock.png";
import percent from "../images/100-percent.png";
import like from "../images/like.png";

function Detail() {
  let id = useParams();
  const [movie, setMovie] = useState([]);
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

  console.log(id.id);

  const [load, setLoad] = useState(null);
  const [video, setVideo] = useState([]);
  const [movieKey, setMoviekey] = useState();
  const navigate = useNavigate();

  const getDetailmv = async () => {
    setLoad(true); // 로딩 시작
    const res = await tmdbAPI.get(`movie/${id.id}`);
    if (res.data) {
      setMovie(res.data); // console.log(res.data);
    } else {
    }
    setLoad(false); // 로딩 종료
  };

  // 좋아요 저장 함수
  let [recentId, setRecentId] = useState([]);
  const storeLikes = () => {
    let arr = localStorage.getItem("store");
    // let checkId = Number(id.id);
    let checkId = Number(id.id);

    if (arr == null) {
      localStorage.setItem("store", JSON.stringify([checkId]));
      setRecentId([checkId]);
    } else {
      arr = JSON.parse(arr);
      arr.push(checkId);
      arr = new Set(arr);
      arr = [...arr];
      console.log(arr);

      localStorage.setItem("store", JSON.stringify(arr));
      setRecentId(arr);
    }
  };

  useEffect(() => {
    getDetailmv();
  }, []);

  let [clickTab, setClickTab] = useState(0);

  useEffect(() => {
    tmdbAPI
      .get(`movie/${id.id}/videos`, { params: { language: "en-US" } })
      .then((res) => {
        console.log(111212);
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
              <section className={style.inner}>
                <img className={style.background} src={`${API_IMAGEURL}${movie.backdrop_path}`} />
                    <div className={style.img_wrapper}>
                        <div className={style.box}>
                            <img className={style.img} src={`${API_IMAGEURL}${movie.poster_path}`} />
                            <div
              style={{
                backgroundColor: "white",
                display: "flex",
              }}
              onClick={() => {
                storeLikes(); // 클릭 시 좋아요
              }}
            >
              <ClickLikes />
            </div>
                            <span className={style.text}
                            onClick={onClickButton}>{isOpen?"닫기":"트레일러 보기"}{isOpen&&<Video open={isOpen} movieKey={movieKey}
                            style={style}
                            onClose={() => {
                              setIsOpen(false);
                            }}/>}</span>
                        </div>
                        <section className={style.info_wrapper}>
                            
                                <span className={style.title}>{movie.title}</span><span>{movie.release_date}</span><br /><br />
                                <span><img src={clock} className={style.runtime_img} /> </span><span className={style.runtime}>{movie.runtime} 분</span>
                                <span><img src={percent} className={style.vote_average_img} /> </span><span className={style.vote_average}>{movie.vote_average}</span>
                                <span><img src={like} className={style.vote_count_img} /> </span><span className={style.vote_count}>{movie.vote_count}</span><br /><br />
                                <span className={style.tagline}>{movie.tagline}</span><br /><br />
                                <span className={style.overview}>{movie.overview}</span>
                            
                        </section>
                    </div>
                </section>
            </div>
                    <div style={{
                        backgroundColor: "white",
                        display: "flex",
                    }}
                    onClick={() => {
                        navigate(`/mypage/likes/${movie.id}`);
                    }}
                    >
                    <ClickLikes />
                    </div>
          
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

          <TabContent clickTab={clickTab} movies={movie} />
        </div>
      )}
    </>
  );
}

function TabContent(props) {
  console.log(props.clickTab);
  if (props.clickTab == 0) {
    return <div style={{ color: "white" }}>{props.movies.original_title}</div>;
  }
  if (props.clickTab == 1) {
    return <div style={{ color: "white" }}>{props.movies.tagline}</div>;
  }
  if (props.clickTab == 2) {
    return (
      <div style={{ color: "white" }}>
        {props.movies.production_companies[0].name}
        <Review></Review>
      </div>
    );
  }
}

export default Detail;