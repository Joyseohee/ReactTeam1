import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tmdbAPI from "../../tmdbAPI";
import { useEffect, useState } from "react";

export default function Movie(movie, like) {
  const { title, overview, id, poster_path } = movie.movie;
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w300";
  const navigate = useNavigate();

  return (
    movie && (
      <div>
        <div>
          <img
            src={`${API_IMAGEURL}${poster_path}`}
            onClick={() => {
              navigate(`/detail:${id}`);
            }}
          />
        </div>
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span>{overview}</span>
        </div>
      </div>
    )
  );
}
