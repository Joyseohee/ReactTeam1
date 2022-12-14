import tmdbAPI from "../../../tmdbAPI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import MyReviewDetail from "./MyReviewDetail";
import Movie from "../../Common/Movie";
import RatingView from "../../Review/RatingView";

export default function MyReviewTd({ review }) {
  let [movieTitle, setMovieTitle] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    tmdbAPI.get(`movie/${review.movie_id}`).then((res) => {
      setMovieTitle(res.data.title);
    });
  }, [show]);

  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="MyreviewWrapper">
        <Col lg={2} md={4} className="moviePoster">
          <Movie id={review.movie_id} width="300" style="MyReviewBox" />
        </Col>
        <Col className="reviewDetail">
          {/* 영화 제목 */}
          <div
            className="myReviewTitle"
            onClick={() => {
              navigate(`/detail/${review.movie_id}`);
            }}
          >
            {movieTitle}
          </div>
          {/* 별점 */}
          <div className="myReviewRates">
            <RatingView rate={review.rate}></RatingView>
          </div>
          {/* 리뷰 내용 */}
          <div
            className="myReviewContent"
            onClick={() => {
              handleShow();
            }}
          >
            {review.content}
          </div>

          {/* 작성일 */}
          <div className="myReviewDate">{review.date}</div>
        </Col>
      </Row>
      <MyReviewDetail show={show} setShow={setShow} review={review} />
    </>
  );
}
