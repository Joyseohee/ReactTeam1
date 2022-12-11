import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShowLikes from "./ShowLikes";
import Movie from "../Common/Movie";

export default function Likes() {
  useEffect(() => {}, []);

  return (
    <>
      <div>Likes</div>
      <ShowLikes />
    </>
  );
}
