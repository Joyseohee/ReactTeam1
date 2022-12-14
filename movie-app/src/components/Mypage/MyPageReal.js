import Header from "../../components/Common/header";
import MyInfo from "../../components/Mypage/MyInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyLikesTab from "../../components/Mypage/MyLikesTab";
import MyReviewTab from "../../components/Mypage/MyReviewTab";
import { useEffect, useState } from "react";
import ShowSelect from "../../components/Mypage/ShowSelect";
import MyRecommandTab from "./MyRecommandTab";

export default function MypageReal() {
  let [mpClickTab, setMpClickTab] = useState(0);

  useEffect(() => {}, [mpClickTab]);

  return (
    <>
      <div style={{ color: "white" }}>
        <Header />
        <Container fluid className="MypageWrapper">
          <Row>
            <Col lg={3} sm={1}></Col>
            <Col className="infoComp">
              <MyInfo />
            </Col>
            <Col lg={3} sm={1}></Col>
          </Row>
          <Row className="tab align-item-end">
            <Col lg={2} sm={1}></Col>
            <Col
              className="likes "
              onClick={() => {
                setMpClickTab(1);
              }}
            >
              <MyLikesTab />
            </Col>
            <Col
              className="recommand"
              onClick={() => {
                setMpClickTab(2);
              }}
            >
              <MyRecommandTab />
            </Col>
            <Col
              className="myreviews"
              onClick={() => {
                setMpClickTab(3);
              }}
            >
              <MyReviewTab />
            </Col>
            <Col lg={2} sm={1}></Col>
          </Row>
          <Row>
            <Col lg={2} sm={1}></Col>
            <Col>
              <ShowSelect mpClickTab={mpClickTab} />
            </Col>
            <Col lg={2} sm={1}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
