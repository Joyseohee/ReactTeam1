import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import style from "./css/Detail.module.scss";
import percent from "./images/100-percent.png";
import tmdbAPI from "../tmdbAPI";
import Loading from "../components/loading";
import Header from "../components/Common/header";
import TVDetailPerson from "../components/Detail/TVDetailPerson";
import TVSimilar from "../components/Detail/TVSimilar";
import TVTrailers from "../components/Detail/TVTrailers";
import TVVideo from "../components/Detail/TVVideo";
import SeasonEpis from "../components/Detail/SeasonEpis";
import Top from "../components/Common/top";
import Footer from "../components/Common/Footer";
import TvReview from "../components/Review/TvReview";

function Detail() {
  let id = useParams();
  const [tv, setTv] = useState([]);
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

  const [load, setLoad] = useState(null);
  const [tvKey, setTvkey] = useState();
  const [genre, setGenre] = useState([]);
  const [company, setCompany] = useState([]);
  const [country, setCountry] = useState([]);

  // TV 디테일 받아오기
  const getTvdetail = async () => {
    setLoad(true); // 로딩 시작
    const res = await tmdbAPI.get(`tv/${id.id}`);
    if (res.data) {
      setTv(res.data);
      setGenre(res.data.genres);
      setCountry(res.data.production_countries);
      setCompany(res.data.production_companies);
    }
    setLoad(false); // 로딩 종료
  };

  useEffect(() => {
    getTvdetail();
    getTVvideo();
  }, []);

  let [clickTab, setClickTab] = useState(0);

  const getTVvideo = async () => {
    setLoad(true);
    const res = await tmdbAPI.get(`tv/${id.id}/videos`, {
      params: { language: "en-US" },
    });
    if (res.data) {
      setTvkey(res.data.results[0].key);
    }
    setLoad(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />

      {load ? (
        <Loading />
      ) : (
        <div className={style.back}>
          <div className={style.header}>
            <div
              className={style.inner}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${tv.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className={style.img_wrapper}>
                <div className={style.box}>
                  <img
                    className={style.img}
                    src={`${API_IMAGEURL}${tv.poster_path}`}
                  />
                  <span className={style.text}>
                    <a
                      href={`https://www.themoviedb.org/tv/${tv.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TMDB로 보기
                    </a>
                  </span>
                </div>
                <section className={style.info_wrapper}>
                  <span className={style.title}>{tv.name}</span>
                  <span className={style.release_date}>
                    {" "}
                    ( {tv.first_air_date} ~ ){" "}
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
                  <span className={style.seasons}>
                    시즌 {tv.number_of_seasons}개
                  </span>
                  <span className={style.seasons}>
                    {" "}
                    {tv.number_of_episodes} 개의 에피소드
                  </span>
                  <br />
                  <br />
                  <span>
                    <img src={percent} className={style.vote_average_img} />{" "}
                  </span>
                  <span className={style.vote_average}>{tv.vote_average}</span>
                  {tv.origin_country == "" ? (
                    <h3 style={{ color: "white" }}>NO Tagline</h3>
                  ) : (
                    <span className={style.tagline}>
                      Country :{" "}
                      <span>
                        {country.map((country, i) => {
                          return (
                            <span key={i} className={style.genre}>
                              {
                                <span>
                                  <span>{country.name}</span>
                                </span>
                              }
                            </span>
                          );
                        })}
                      </span>
                    </span>
                  )}
                  <br />
                  <br />
                  {tv.overview == "" ? (
                    <h3 style={{ color: "white" }}>NO Overview</h3>
                  ) : (
                    <span className={style.overview}>{tv.overview}</span>
                  )}
                  <br />
                  <br />
                  <button className={style.playbutton} onClick={onClickButton}>
                    트레일러 보기
                  </button>
                  <div className={style.player}>
                    {isOpen && (
                      <TVVideo
                        open={isOpen}
                        tvKey={tvKey}
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
                  시즌&에피소드
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

            <TabContent clickTab={clickTab} tv={tv} company={company} />
          </div>
          <Top></Top>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

function TabContent(props) {
  const tvId = props.tv.id;
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w200";

  if (props.clickTab == 0) {
    return (
      <>
        <TVDetailPerson tvId={tvId} />
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
                    <div className={style.companyName}> {company.name} </div>
                  </div>
                }
              </div>
            );
          })}
        </div>
        <hr />

        <div style={{ paddingTop: "1%" }}>
          <h4 style={{ color: "white" }}>진행상황</h4>
        </div>
        <div style={{ paddingBottom: "1%" }}>
          <h5 style={{ color: "white" }}>{props.tv.status}</h5>
        </div>
        <hr />
        <TVTrailers tvId={tvId} />
        <hr />
        <TVSimilar tvId={tvId} />
      </>
    );
  }
  if (props.clickTab == 1) {
    return (
      <div>
        <SeasonEpis SeasonEpis tvId={tvId} />
      </div>
    );
  }
  if (props.clickTab == 2) {
    return (
      <div style={{ color: "white" }}>
        <TvReview></TvReview>
      </div>
    );
  }
}

export default Detail;
