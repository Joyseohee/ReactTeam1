import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import style from "./css/Detail.module.scss";
import Header from "../components/Common/header";
import Loading from "../components/loading";
import tmdbAPI from "../tmdbAPI";
import Video from "../components/Detail/Video";
import DetailContent from "../components/Detail/DetailContent";
import ClickLikes from "../components/Detail/ClickLikes";
import Top from "../components/Common/top";
import Trailers from "../components/Detail/Trailers";
import Similar from "../components/Detail/Similar";
import Footer from "../components/Common/Footer";
import Review from "../components/Review/Review";
import ReviewTemplate from "../components/Review/ReviewTemplate";

import clock from "./images/clock.png";
import percent from "./images/100-percent.png";
import like from "./images/like.png";

function Detail() {
  const movieID = useParams().id;
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

  const [load, setLoad] = useState(null);
  const [movieInfo, setMovieInfo] = useState([]);
  const [genres, setGenres] = useState([]);
  const [company, setCompany] = useState([]);
  const [video, setVideo] = useState([]);
  const [videokey, setVideokey] = useState();

  useEffect(() => {
    getMovieDetail();
    getVideo();
  }, []);

  // 영화 상세정보, 제작사, 장르
  const getMovieDetail = async () => {
    setLoad(true);
    const res = await tmdbAPI.get(`movie/${movieID}`);
    if (res.data) {
      setMovieInfo(res.data);
      setGenres(res.data.genres);
      setCompany(res.data.production_companies);
    } else {
      console.log("error");
    }
    setLoad(false);
  };

  // 영화 관련 영상
  const getVideo = async () => {
    setLoad(true);
    const res = await tmdbAPI.get(`movie/${movieID}/videos`, {
      params: { language: "en-US" },
    });
    if (res.data) {
      setVideo(res.data.results);
      setVideokey(res.data.results[0].key);
    } else {
      console.log("error");
    }
    setLoad(false);
  };

  let [clickTab, setClickTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 헤더 */}
      <Header />

      {load ? (
        <Loading />
      ) : (
        <div className={style.back}>
          <div className={style.header}>
            <div
              className={style.inner}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className={style.img_wrapper}>
                <div className={style.box}>
                  <img
                    className={style.img}
                    src={`${API_IMAGEURL}${movieInfo.poster_path}`}
                  />

                  <span className={style.text}>
                    <a
                      href={`https://www.themoviedb.org/movie/${movieInfo.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TMDB로 보기
                    </a>
                  </span>
                </div>
                <section className={style.info_wrapper}>
                  <span className={style.title}>{movieInfo.title}</span>
                  <span className={style.release_date}>
                    {" "}
                    ( {movieInfo.release_date} ){" "}
                  </span>
                  <br />
                  <div>
                    {genres.map((genres, i) => {
                      return (
                        <span key={i} className={style.genre}>
                          {
                            <span>
                              <span>{genres.name}</span>
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
                  <span className={style.runtime}>{movieInfo.runtime} 분</span>
                  <span>
                    <img src={percent} className={style.vote_average_img} />{" "}
                  </span>
                  <span className={style.vote_average}>
                    {movieInfo.vote_average}
                  </span>
                  <span>
                    <ClickLikes id={movieID} like={like} style={style} />
                  </span>
                  <span className={style.vote_count}>좋아요</span> <br />
                  <br />
                  {movieInfo.tagline == "" ? (
                    <h3 style={{ color: "white" }}>NO Tagline</h3>
                  ) : (
                    <span className={style.tagline}>{movieInfo.tagline}</span>
                  )}
                  <br />
                  <br />
                  {movieInfo.overview == "" ? (
                    <h3 style={{ color: "white" }}>NO Overview</h3>
                  ) : (
                    <span className={style.overview}>{movieInfo.overview}</span>
                  )}
                  <br />
                  <br />
                  <button className={style.playbutton} onClick={onClickButton}>
                    트레일러 보기
                  </button>
                  <div className={style.player}>
                    {isOpen && (
                      <Video
                        open={isOpen}
                        videokey={videokey}
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
            <br />
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
                  실관람평
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setClickTab(2);
                  }}
                  eventKey="link-2"
                >
                  해외 평론 및 리뷰
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <TabContent
              clickTab={clickTab}
              movies={movieInfo}
              company={company}
            />
          </div>

          {/* 위로가기 버튼 */}
          <Top />

          {/* 푸터 */}
          <Footer />
        </div>
      )}
    </>
  );
}

function TabContent(props) {
  const movieId = props.movies.id;
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w200";

  if (props.clickTab == 0) {
    return (
      <>
        {/* 등장인물 */}
        <DetailContent movieId={movieId} />

        <hr />

        <div style={{ paddingTop: "1%" }}>
          <h4 style={{ color: "white" }}>제작사</h4>
        </div>

        <div className={style.company}>
          {props.company.map((company, i) => {
            return (
              <div key={i} style={{ paddingBottom: "1%" }}>
                {
                  <div>
                    {company.logo_path == null ? (
                      <div style={{ color: "white" }}>로고없음</div>
                    ) : (
                      <div className={style.imgCover}>
                        <img
                          className={style.logo}
                          src={`${API_IMAGEURL}${company.logo_path}`}
                        />
                      </div>
                    )}
                    <div className={style.companyName}> {company.name}</div>
                  </div>
                }
              </div>
            );
          })}
        </div>

        <hr />

        <div style={{ paddingTop: "1%" }}>
          <h4 style={{ color: "white" }}>수익</h4>
        </div>
        <div style={{ paddingBottom: "1%" }}>
          <h5 style={{ color: "white" }}>${props.movies.revenue}</h5>
        </div>
        <hr />
        <Trailers movieId={movieId} />
        <hr />
        <Similar movieId={movieId} />
      </>
    );
  }
  if (props.clickTab == 1) {
    return (
      <div style={{ color: "white" }}>
        <ReviewTemplate></ReviewTemplate>
      </div>
    );
  }

  if (props.clickTab == 2) {
    return (
      <div style={{ color: "white" }}>
        <Review></Review>
      </div>
    );
  }
}

export default Detail;
