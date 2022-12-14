import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tmdbAPI from "../../tmdbAPI";
import Col from "react-bootstrap/Col";

export default function Movie(props) {
  const [movie, setMovie] = useState([]);
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w300";
  const navigate = useNavigate();

  useEffect(() => {
    tmdbAPI.get(`movie/${props.id}`).then((res) => {
      setMovie(res.data);
    });
  }, []);

  return (
    <Col className="col align-self-center">
      <img
        className="LikesMovieImg"
        src={`${API_IMAGEURL}${movie.poster_path}`}
        onClick={() => {
          navigate(`/detail/${movie.id}`);
        }}
      />
    </Col>
  );
}
