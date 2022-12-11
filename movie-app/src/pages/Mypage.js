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

          <Col md={10} lg={8}>
            <Nav
              className="navbar"
              fill
              justify
              variant="tabs"
              defaultActiveKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="/myreview">
                  나의 리뷰
                  {/* <MyReview /> */}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/likes">좋아요{/* <Likes /> */}</Nav.Link>
                {/* <Nav.Link eventKey="link-1">좋아요</Nav.Link> */}
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={1} lg={2} />
        </Row>
      </Container>
    </>
  );
}
