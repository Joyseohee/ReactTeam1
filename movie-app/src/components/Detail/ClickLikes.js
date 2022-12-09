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

export default function ClickLikes() {
  return (
    <>
      <div
        style={{
          color: "red",
          fontWeight: 700,
          fontSize: 20,
          display: "inline-block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <span>👍🏼</span>
        <span>좋아요</span>
      </div>
    </>
  );
}
