import {
  Routes,
  Route,
  useNavigate,
  Link,
  renderMatches,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tmdbAPI from "../../tmdbAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowLikes(id) {
  //   let id = useParams();
  id = id.id;

  return (
    <>
      <div>
        <h3>{id.id}</h3>
        <h3>나오냐</h3>
      </div>
    </>
  );
}
