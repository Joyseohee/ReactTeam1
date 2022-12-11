import "./css/Mypage.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyReview from "../components/Mypage/MyReview";
import Likes from "../components/Mypage/Likes";
import MypgHeader from "../components/Mypage/MypgHeader";
import MyInfo from "../components/Mypage/MyInfo";
import { Button, Nav } from "react-bootstrap";

export default function Mypage() {
  const navigate = useNavigate();

  return (
    <>
      <MypgHeader />
      <Container>
        <Row>
          <Col md={1} lg={2} />
          <Col md={10} lg={8}>
            <div className="infoComp">
              <MyInfo />
            </div>
          </Col>
          <Col md={1} lg={2} />
        </Row>
        <Row>
          <Col md={1} lg={2} />
          <Col md={5} lg={4}>
            {/* <Likes /> */}
            <div
              className="likes"
              onClick={() => {
                navigate(`/likes`);
              }}
            >
              기대하는 영화
            </div>
          </Col>
          <Col md={5} lg={4}>
            {/* <MyReview /> */}
            <div
              className="myreviews"
              onClick={() => {
                navigate(`/myreview`);
              }}
            >
              내가 쓴 리뷰
            </div>
          </Col>
          <Col md={1} lg={2} />
        </Row>
      </Container>
    </>
  );
}
