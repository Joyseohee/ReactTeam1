import tmdbAPI from "../../tmdbAPI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyReviewDetail from "./MyReviewDetail";
import { Modal, Button } from "react-bootstrap";

export default function MyReviewTd({ review }) {
  let [movieTitle, setMovieTitle] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    tmdbAPI.get(`movie/${review.movie_id}`).then((res) => {
      setMovieTitle(res.data.title);
    });
    console.log(show);
  }, [show]);

  const handleShow = () => setShow(true);

  return (
    <>
      <tr style={{ color: "white" }}>
        <td>1</td>
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
        <td>{review.date}</td>
      </tr>
      <MyReviewDetail show={show} setShow={setShow} review={review} />
    </>
  );
}
