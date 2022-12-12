import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShowLikes from "../components/Mypage/ShowLikes";
import Movie from "../components/Common/Movie";

export default function Likes() {
  return (
    <>
      <div>Likes</div>
      <ShowLikes />
    </>
  );
}
