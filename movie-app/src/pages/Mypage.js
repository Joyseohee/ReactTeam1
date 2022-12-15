import { useEffect, useState } from "react";

import "./css/Mypage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Common/header";
import MyInfo from "../components/Mypage/MyInfo";
import MypageTab from "../components/Mypage/MypageTab";
import ShowSelect from "../components/Mypage/ShowSelect";

export default function Mypage() {
  let [loginCheck, setLoginCheck] = useState(0);
  let [mpClickTab, setMpClickTab] = useState([]);
  let clickTab = [
    { name: "likeMovieTab", tab: "기대하는 영화" },
    { name: "recommandTab", tab: "추천 영화" },
    { name: "likeReviewTab", tab: "내가 쓴 리뷰" },
  ];

  useEffect(() => {
    setLoginCheck(localStorage.getItem("loginCheck"));
  }, [loginCheck, mpClickTab]);

  return (
    <>
      {loginCheck === 0 ? null : (
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

              <Row className="align-item-end">
                <Col lg={2} sm={1}></Col>
                {clickTab.map((tab, i) => {
                  return (
                    <Col
                      onClick={() => {
                        setMpClickTab(i);
                      }}
                    >
                      <MypageTab clickTab={tab.name} showTab={tab.tab} />
                    </Col>
                  );
                })}
                <Col lg={2} sm={1}></Col>
              </Row>
              <Row>
                <Col lg={2} sm={1}></Col>
                <Col className=" align-self-center">
                  <ShowSelect mpClickTab={mpClickTab} />
                </Col>
                <Col lg={2} sm={1}></Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
}
