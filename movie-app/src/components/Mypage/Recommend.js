import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import style from "./Recommend.module.css";
import Movie from "../Common/Movie";

function Recommend() {
  let [movdata, setMovdata] = useState([]);
  let [MyrecommendMovie, setMyRecommendMovie] = useState([]);
  let [recommendFirstMovie, setRecommendFirstMovie] = useState([]);

  const [change, setChange] = useState(false);

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/xoxorbrb/xoxorbrb/main/data.json")
      .then((res) => {
        setMovdata(res.data.result);
      });

    AOS.init();
    RecommendMovie();

    let timer = setTimeout(() => {
      RecommendMovie();
      setChange(true);
    }, 1);

    return () => {
      clearTimeout(timer);
    };
  }, [change]);

  // 영화 추천
  function RecommendMovie() {
    let myMovieId = JSON.parse(localStorage.getItem("likestore")); //로컬스토리지에서 영화이름 가져오기
    let myMovieinfo = []; //이름, 장르번호 기억
    let firstMovie = []; //첫영화
    let myGenreIds = []; //장르번호
    let recommendMovieInfo = []; //추천 영화 모음
    let recommendMovie = []; //다섯개씩 배열 배열
    let random2 = [];
    let movietitle = [];
    let randommovie = []; //다섯개씩 배열

    if (myMovieId == null) {
      setMyRecommendMovie(0);
    } else {
      //영화 제목으로 영화 정보 얻기
      for (let i = 0; i < myMovieId.length; i++) {
        for (let j = 0; j < movdata.length; j++) {
          if (myMovieId[i] === movdata[j].id) {
            myMovieinfo[movdata[j].title] =
              movdata[j].genre_ids[movdata[j].genre_ids.length - 1]; // 장르아이디 이름 저장 (장르 하나만 저장함)
            myGenreIds[i] =
              movdata[j].genre_ids[movdata[j].genre_ids.length - 1];
            firstMovie[i] = movdata[j]; // 영화 저장 (영화 추천을 위해)
            break;
          }
        }
      }
      movietitle = Object.keys(myMovieinfo);

      for (let i = 0; i < myGenreIds.length; i++) {
        for (let j = 0; j < movdata.length; j++) {
          if (movdata[j].genre_ids.includes(myGenreIds[i])) {
            recommendMovieInfo.push({ [movietitle[i]]: movdata[j] });
          }
        }
      }

      for (let i = 0; i < movietitle.length; i++) {
        randommovie = [];
        random2 = [];
        for (let j = 1; j <= 4; j++) {
          //첫영화 제외하고 4개 (한줄에 다섯개의 영화가 있기 때문에)
          let random = Math.floor(Math.random() * recommendMovieInfo.length);
          if (!random2.includes(random)) {
            // 같은 영화 추천을 하지 않기 위해서
            random2.push(random);
            if (Object.keys(recommendMovieInfo[random])[0] !== movietitle[i]) {
              j--;
            } else {
              randommovie.push(recommendMovieInfo[random]);
            }
          } else j--;
        }
        recommendMovie.push(randommovie);
      }
      setMyRecommendMovie(recommendMovie);
      setRecommendFirstMovie(firstMovie);
    }
  }

  return (
    <>
      {MyrecommendMovie.length > 0
        ? recommendFirstMovie.map((firstMovie, i) => {
            return (
              <>
                <div className="recommandContainer">
                  <h4 className="recTitle">
                    {firstMovie.title}과(와) 비슷한 장르
                  </h4>
                  <div data-aos="fade-up">
                    <div className={style.recommendcontainer}>
                      {MyrecommendMovie[i].map((recommendmovie, i) => {
                        //2차원 배열을 맵으로 돌리기 위해
                        const recommnedmovie =
                          recommendmovie[firstMovie.title].id;
                        return (
                          <div
                            className={style.recommendmovieCard}
                            data-aos="fade-right"
                          >
                            <Movie
                              id={recommnedmovie}
                              width="300"
                              style="recommanBox"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })
        : change && (
            <>
              <div>
                <h4 style={{ color: "#fff" }}>추천할 영화가 없습니다</h4>
              </div>
            </>
          )}
    </>
  );
}

export default Recommend;
