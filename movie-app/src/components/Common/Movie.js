import {
  Routes,
  Route,
  useNavigate,
  Link,
  redirect,
  useParams,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tmdbAPI from "../../tmdbAPI";
import { useEffect, useState } from "react";
import Search from "../../pages/Search";

export default function Movie() {
  let id = useParams();
  const [movie, setMovie] = useState([]);
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";
  const navigate = useNavigate();

  useEffect(() => {
    tmdbAPI.get(`movie/${id.id}`).then((res) => {
      setMovie(res.data);
    });
  }, []);

  return (
    <div>
      <h3>{movie.title}</h3>
      <img className="img" src={`${API_IMAGEURL}${movie.poster_path}`} />
    </div>
  );
}
