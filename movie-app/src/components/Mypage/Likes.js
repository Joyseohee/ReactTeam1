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

  // console.log(recentId.find());

  useEffect(() => {
    let arr = localStorage.getItem("store");
    let checkId = { id: id.id };

    if (arr == null) {
      localStorage.setItem("store", JSON.stringify([checkId]));
      setRecentId([checkId]);
    } else {
      // let checkDuple = arr.filter((el, checkId) => arr.indexOf(el) === checkId);
      // console.log("***");
      // console.log(arr);
      // console.log("여기");
      arr = JSON.parse(arr);
      arr.push(checkId);
      arr = new Set(arr);
      arr = [...arr];

      localStorage.setItem("store", JSON.stringify(arr));
      setRecentId(arr);
    }
  }, []);

  return (
    <>
      <div>Likes</div>
      <ShowLikes />
    </>
  );
}
