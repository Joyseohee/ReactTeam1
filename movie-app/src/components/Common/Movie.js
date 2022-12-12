import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tmdbAPI from "../../tmdbAPI";

export default function Movie(props) {
  const [movie, setMovie] = useState([]);
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";
  const navigate = useNavigate();

  useEffect(() => {
    tmdbAPI.get(`movie/${props.id}`).then((res) => {
      setMovie(res.data);
    });
  }, []);

  return (
    <div>
      <h3>{movie.title}</h3>
      <img
        className="img"
        src={`${API_IMAGEURL}${movie.poster_path}`}
        onClick={() => {
          navigate(`/detail/${movie.id}`);
        }}
      />
    </div>
  );
}
