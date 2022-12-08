import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Favorite from "../components/Mypage/Favorite";
import Likes from "../components/Mypage/Likes";

export default function Mypage(movie, setMovie, like, setLike) {
  return (
    <>
      <div>
        <Favorite />
      </div>
      <div>
        <Likes />
      </div>
    </>
  );
}
