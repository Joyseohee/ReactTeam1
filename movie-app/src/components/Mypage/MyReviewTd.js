import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tmdbAPI from "../../tmdbAPI";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Movie from "../Common/Movie";

export default function MyReviewTd(review) {
  let [movieTitle, setMovieTitle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    tmdbAPI.get(`movie/${review.review.movie_id}`).then((res) => {
      setMovieTitle(res.data.title);
    });
  }, []);

  return (
    <>
      <tr style={{ color: "white" }}>
        <td>1</td>
        <td
          onClick={() => {
            navigate(`/detail/${review.review.movie_id}`);
          }}
        >
          {movieTitle}
        </td>
        <td
          onClick={() => {
            navigate(`/detail/${review.review.movie_id}`);
          }}
        >
          {review.review.content}
        </td>
        <td>{review.review.date}</td>
      </tr>
    </>
  );
}
