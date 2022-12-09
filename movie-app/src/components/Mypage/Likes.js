import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShowLikes from "./ShowLikes";
import Movie from "../Common/Movie";

export default function Likes() {
  let id = useParams();
  let [likes, setLikes] = useState([]);
  let [recentId, setRecentId] = useState([]);
  let [dupleId, setDupleId] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("store");
    let checkId = Number(id.id);

    if (arr == null) {
      localStorage.setItem("store", JSON.stringify([checkId]));
      setRecentId([checkId]);
    } else {
      arr = JSON.parse(arr);
      arr.push(checkId);
      arr = new Set(arr);
      arr = [...arr];
      console.log(arr);

      localStorage.setItem("store", JSON.stringify(arr));
      setRecentId(arr);
    }
  }, []);

  return (
    <>
      <div>
        <div>기대되는 영화</div>
        <Movie />
        <ShowLikes id={id} />
      </div>
    </>
  );
}
