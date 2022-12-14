import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../css/FAQ.scss";
import Top from "../top";
import Header from "../header";
import Footer from "../Footer";

function FAQ() {
  return (
    <>
      <Header></Header>
      <div className="FAQ_Container">
        <div className="FAQ_title">
          <h4>자주 묻는 질문</h4>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>NPM은 무엇인가요?</Accordion.Header>
            <Accordion.Body>
              NPM는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리
              등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서
              시청할 수 있는 스트리밍 서비스입니다. 저렴한 월 요금으로 원하는
              시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어
              있으며 매주 새로운 시리즈와 영화가 제공됩니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>요금은 얼마인가요?</Accordion.Header>
            <Accordion.Body>
              스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
              디바이스에서 월정액 요금 하나로 NPM을 시청하세요. 멤버십 요금은 월
              5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이
              없습니다. iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를
              저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에
              연결할 수 없는 곳에서도 시청하세요.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              멤버쉽을 해지하려면 어떻게 하나요?
            </Accordion.Header>
            <Accordion.Body>
              NPM는 부담 없이 간편합니다. 계약 문제, 약정도 없으며, 멤버십
              해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도
              없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              NPM에서 어떤 콘텐츠를 시청할 수 있나요?
            </Accordion.Header>
            <Accordion.Body>
              NPM는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한
              NPM 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는
              콘텐츠를 원하는 시간에 원하는 만큼 시청하세요.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Top></Top>
        <Footer></Footer>
      </div>
    </>
  );
}

export default FAQ;
