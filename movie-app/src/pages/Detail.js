import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";
import Loading from "../components/loading";
import tmdbAPI from "../tmdbAPI";
import ReactPlayer from "react-player";
import ClickLikes from "../components/Detail/ClickLikes";
import Movie from "../components/Common/Movie";
import { Nav } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Review/Modal";
import ReviewList from "../components/Review/ReviewList";
import ReviewInsert from "../components/Review/ReviewInsert";
import "../components/Review/ReviewInsert";
import "../components/Review/Modal";
import "../store";
import { ReviewWrite } from "../store";
import ReviewTestTemplate from "../components/ReviewTest/ReviewTestTemplate";
import ReviewTestList from "../components/ReviewTest/ReviewTestList";
import ReviewTestInsert from "../components/ReviewTest/ReviewTestInsert";
function Detail() {

     let id = useParams();
     const [movie, setMovie] = useState([]);
     const API_IMAGEURL = 'https://image.tmdb.org/t/p/w400';
    
    console.log(id.id);

    const [video, setVideo] = useState([]);
    const [movieKey, setMoviekey] = useState();
    const navigate = useNavigate();

    const getDetailmv = async () => {
        setLoad(true); // 로딩 시작
        const res = await tmdbAPI.get(`movie/${id.id}`);
        if (res.data) { setMovie(res.data); // console.log(res.data);
        } else {
            console.log("error");
        }
        setLoad(false); // 로딩 종료
    }

    useEffect(()=>{
        getDetailmv();
    },[])

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

      return (

        <>
        
        {

            load
                ? <Loading />
                :
        <div className={style.back}>
          <section>
            <img
              className={style.img}
              src={`${API_IMAGEURL}${movie.poster_path}`}
            />
            <div
              style={{
                backgroundColor: "white",
                display: "flex",
              }}
              onClick={() => {
                navigate(`/mypage/likes/${movie.id}`);
              }}
            >
              <ClickLikes />
            </div>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={`https://www.youtu.be/${movieKey}`} // 플레이어 url
                width="800px" // 플레이어 크기 (가로)
                height="500px" // 플레이어 크기 (세로)
                playing={true} // 자동 재생 on
                muted={true} // 자동 재생 on
                controls={true} // 플레이어 컨트롤 노출 여부
                light={false} // 플레이어 모드
                pip={true} // pip 모드 설정 여부
              />
            </div>
            <div style={{ color: "white" }}>{movie.title}</div>
            <span style={{ color: "white" }}>{movie.overview}</span>
          </section>
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
       
        }
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
          </div>
        );
      }
    }
    
    export default Detail;
    