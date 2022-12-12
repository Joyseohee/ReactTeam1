import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tmdbAPI from "../../tmdbAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../Common/Movie";

export default function ShowLikes() {
  let [recentId, setRecentId] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("likestore");
    arr = JSON.parse(arr);
    arr = new Set(arr);
    arr = [...arr];
    setRecentId(arr);
  }, []);

  console.log(recentId);

  return (
    <div>
      <div style={{ color: "red" }}>추가 가능</div>
      {recentId === null
        ? null
        : recentId.map((LikesId) => {
            return <Movie id={LikesId} />;
          })}
    </div>
  );
}
