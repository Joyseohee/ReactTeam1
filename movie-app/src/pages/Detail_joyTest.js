import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Movie from "../components/Common/Movie";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import tmdbAPI from "../tmdbAPI";

export default function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  // const id = params.id;
  console.log("id" + id);

  useEffect(() => {
    tmdbAPI.get("movie/popular").then((res) => {
      setMovie(res.data.results);
    });
  }, [setMovie]);

  console.log(movie);

  return (
    <>
      <Movie key={`key-${id}`} movie={movie} />
    </>
  );
}
