import tmdbAPI from "../../tmdbAPI";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
// import RatingView from "./RatingView";
import "./scss/Review.scss";
import AOS from "aos";
import Card from "react-bootstrap/Card";
import RatingView from "./RatingView";
import Loading from "../loading";

function Review() {
  const movieID = useParams().id;
  console.log("check id : " + movieID);
  let id = useParams();
  // console.log("let id : " + id);
  const [load, setLoad] = useState(null);
  const [movie, setMovie] = useState([]); // 가져올 영화 담을 배열
  const [page, setPage] = useState(1); // axios param전달해줄 페이지
  console.log(id);
  const getReview = async () => {
    setLoad(true); // 로딩 시작
    const res = await tmdbAPI.get(`movie/${id.id}/reviews?`, {
      // const res = await tmdbAPI.get(`movie/${id.id}/reviews?`, {
      params: { language: "*", page: `${page}` }, //추가한것
    });
    if (res.data) {
      setMovie(res.data.results);
    }
    setLoad(false); // 로딩 종료
  };

  useEffect(() => {
    AOS.init();
    getReview();
  }, []);

  return load ? (
    <Loading />
  ) : (
    <div className="Review-container">
      <div className="Review-title">
        <Card className="ReviewTitleCard">
          <Card.Body className="CardBody">
            <p>해외 평론 및 리뷰</p>
          </Card.Body>
        </Card>
      </div>
      {movie
        .slice(0)
        .reverse()
        .map((movie, i) => {
          return (
            <>
              <div className="Review-box">
                <Alert
                  variant="light"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <Alert.Heading className="wantFlex">
                    &nbsp; {movie.author} &nbsp;&nbsp;
                    <RatingView
                      rate={movie.author_details.rating / 2}
                    ></RatingView>
                  </Alert.Heading>
                  <p>{movie.content}</p>
                  <hr />
                  <p className="mb-0">&nbsp;작성일 : {movie.created_at}</p>
                </Alert>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Review;
