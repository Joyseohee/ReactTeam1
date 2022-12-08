import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Movie from "../components/Common/Movie";
import tmdbAPI from "../tmdbAPI";

export default function Main(like, setLike) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    tmdbAPI.get("movie/popular").then((res) => {
      setMovie(res.data.results);
    });
  }, []);

  return (
    <div>
      {movie.map((movie, i) => {
        return <Movie key={`key-${movie.id}`} movie={movie} />;
      })}
    </div>
  );
}
