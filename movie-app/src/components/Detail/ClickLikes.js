import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tmdbAPI from "../../tmdbAPI";
import { useEffect, useState } from "react";

export default function Movie(movie, like) {
  return (
    <>
      <div>
        <span>👍🏼</span>
        <span>좋아요</span>
      </div>
    </>
  );
}
