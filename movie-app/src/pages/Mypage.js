import "./css/Mypage.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Common/header";
import MyInfo from "../components/Mypage/MyInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyLikesTab from "../components/Mypage/MyLikesTab";
import MyReviewTab from "../components/Mypage/MyReviewTab";

export default function Mypage() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ color: "white" }}>
        <Header />
        <Container fluid className="MypageWrapper">
          <Row>
            <Col lg={2} sm={1}></Col>
            <Col className="infoComp">
              <MyInfo />
            </Col>
            <Col lg={2} sm={1}></Col>
          </Row>
          <Row>
            <Col lg={2} sm={1}></Col>
            <Col
              className="likes col "
              onClick={() => {
                navigate(`/likes`);
              }}
            >
              <MyLikesTab />
            </Col>

            <Col
              className="myreviews col"
              onClick={() => {
                navigate(`/myreview`);
              }}
            >
              <MyReviewTab />
            </Col>
            <Col lg={2} sm={1}></Col>
          </Row>
          <Row>
            <Col lg={2} sm={1}></Col>
            <Col>
              <div className="dividedMain"></div>
            </Col>
            <Col lg={2} sm={1}></Col>
          </Row>
          <Row>
            <Col lg={2} sm={1}></Col>
            <Col>
              <div className="dividedMain"></div>
            </Col>
            <Col lg={2} sm={1}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
