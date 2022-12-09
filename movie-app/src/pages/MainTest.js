import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Movie from "../components/Common/Movie";
import tmdbAPI from "../tmdbAPI";
import ClickLikes from "../components/Detail/ClickLikes";

export default function Main(like, setLike) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    tmdbAPI.get("movie/popular").then((res) => {
      setMovie(res.data.results);
    });
  }, []);

  return (
    <>
      <div>
        <ClickLikes />
        {/* {movie.map((movie, i) => {
          return <Movie key={`key-${movie.id}`} movie={movie} />;
        })} */}
      </div>
    </>
  );
}
