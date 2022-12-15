import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import "./css/Footer.scss";

function Footer() {
  let navigate = useNavigate(); // page move hook

  return (
    <>
      <div className="Footer-title">
        <hr />
      </div>
      <div className="Footer-Nav">
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
            <Nav.Link
              onClick={() => {
                navigate("/Policy");
              }}
            >
              이용약관
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                navigate("/FAQ");
              }}
            >
              자주 묻는 질문
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <p
          className="text-center mt-4 mb-4"
          color="white"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/images/logo.png" width="100px" height="100px"></img>
        </p>
        <Nav className="justify-content-end" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">법적고지</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">윤리경영</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">계열사</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}
export default Footer;
