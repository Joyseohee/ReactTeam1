import tmdbAPI from "../../tmdbAPI";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Rating from "./Rating";
import "./Review.scss";

// 테스트
import { useLocation } from "react-router-dom";

function Review() {
  let id = useParams();
  const [load, setLoad] = useState(null);
  const [movie, setMovie] = useState([]); // 가져올 영화 담을 배열
  const [page, setPage] = useState(1); // axios param전달해줄 페이지
  // location test
  const location = useLocation();
  const reviewtest = location.content;

  console.log("location :" + { reviewtest });
  //const [rate, setRate] = React.useState(1);

  const getReview = async () => {
    setLoad(true); // 로딩 시작

    const res = await tmdbAPI.get(`movie/${id.id}/reviews?`, {
      //      params: { page: `${page}` },
      params: { language: "*", page: `${page}` }, //추가한것
    });
    // console.log(res.data);
    console.log(" results :" + res.data.results);

    if (res.data) {
      setMovie(res.data.results); // console.log(res.data);
      //let temp = [...movie, ...res.data.results];
      console.log(movie);
    } else {
      console.log("error");
    }
    setLoad(false); // 로딩 종료
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className="Review-container">
      <div>
        <textarea> 글 작성 할 자리 </textarea>
      </div>
      {movie
        .slice(0)
        .reverse()
        .map((movie, i) => {
          return (
            <div className="Review-box">
              <Alert variant="light">
                <Alert.Heading>
                  {movie.author}
                  <Rating
                    // setRate={setRate}
                    rate={movie.author_details.rating / 2}
                  />
                  {/* {movie.author_details.rating} */}
                </Alert.Heading>
                <p>{movie.content}</p>
                <hr />
                <p className="mb-0">작성일 : {movie.created_at}</p>
              </Alert>
            </div>
          );
        })}
    </div>
  );
}

export default Review;