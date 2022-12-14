import tmdbAPI from "../../../tmdbAPI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import MyReviewDetail from "./MyReviewDetail";
import Rating from "../../Review/Rating";
import Movie from "../../Common/Movie";

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
      <div className="MyreviewWrapper">
        <div>
          <div>
            <Movie id={review.movie_id} width="200" />
          </div>
          {/* 영화 제목 */}
          <div
            onClick={() => {
              navigate(`/detail/${review.movie_id}`);
            }}
          >
            {movieTitle}
          </div>
          {/* 리뷰 내용 */}
          <div
            onClick={() => {
              handleShow();
            }}
          >
            {review.content}
          </div>
          {/* 별점 */}
          <div>
            <Rating rate={review.rate / 2} />
          </div>
          {/* 작성일 */}
          <div>{review.date}</div>
        </div>
      </div>
      <MyReviewDetail show={show} setShow={setShow} review={review} />
    </>
  );
}
