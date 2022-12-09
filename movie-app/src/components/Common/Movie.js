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
import Search from "../Search/Search";

export default function Movie(movie, like) {
  const { title, overview, poster_path } = movie.movie;
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w300";
  const navigate = useNavigate();
  const id = useParams();
  console.log(id);

  return (
    movie && (
      <div>
        <div>
          <img
            src={`${API_IMAGEURL}${poster_path}`}
            onClick={() => {
              navigate(`/de:${id}`);
            }}
          />
        </div>
        <div>
          <span style={{ color: "white" }}>제목 : {title}</span>
        </div>
        <div>
          <span style={{ color: "white" }}>{overview}</span>
        </div>
      </div>
    )
  );
}
