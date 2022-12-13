import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate(); // page move hook

  return (
    <>
      <div className="Footer-title">
        {/* hr 두깨감 주고 그림자 줘서 header와 비슷한 느낌으로 수정하기 */}
        <hr />
      </div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              navigate("/Info");
            }}
          >
            회사소개
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">이용약관</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">자주 묻는 질문</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">회사명을 입력해주세요...</p>
      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
export default Footer;
