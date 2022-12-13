import tmdbAPI from "../../../tmdbAPI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyReviewDetail from "./MyReviewDetail";
import Rating from "../../Review/Rating";

export default function MyReviewTd({ review, index }) {
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
      <tr style={{ color: "white" }}>
        <td>{index + 1}</td>
        <td
          onClick={() => {
            navigate(`/detail/${review.movie_id}`);
          }}
        >
          {movieTitle}
        </td>
        <td
          onClick={() => {
            handleShow();
          }}
        >
          {review.content}
        </td>
        <td>
          <Rating rate={review.rate / 2} />
        </td>
        <td>{review.date}</td>
      </tr>
      <MyReviewDetail show={show} setShow={setShow} review={review} />
    </>
  );
}