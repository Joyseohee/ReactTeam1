import React, { useEffect, useState } from "react";
import "./css/Login.css";
import "./css/Login.scss";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/Login/LoginButton";
import MoveToJoin from "../components/Login/MoveToJoin";
import LoginIdInput from "../components/Login/LoginIdInput";
import LoginPwdInput from "../components/Login/LoginPwdInput";
import { Col, Container, Row } from "react-bootstrap";
// import logo from "../../public/images/neflixLogo.png";

export default function Mypage() {
  const navigate = useNavigate();

  let [loginId, setLoginId] = useState();
  let [loginPwd, setLoginPwd] = useState();

  const Login = () => {
    if (loginIdOk && loginPwdOk) {
      localStorage.setItem("loginCheck", 1);
      alert("로그인에 성공했습니다");
      navigate("/");
    } else {
      localStorage.setItem("loginCheck", 0);
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요");
    }
  };

  useEffect(() => {
    setLoginId(localStorage.getItem("accountId"));
    setLoginPwd(localStorage.getItem("accountPwd"));
  });

  let [loginIdOk, setloginIdOk] = useState(false);
  let [loginPwdOk, setloginPwdOk] = useState(false);

  const loginInputId = (inputId) => {
    if (loginId == inputId) {
      setloginIdOk(true);
    } else {
      setloginIdOk(false);
    }
  };
  const loginInputPwd = (inputPwd) => {
    if (loginPwd == inputPwd) {
      setloginPwdOk(true);
    } else {
      setloginPwdOk(false);
    }
  };

  return (
    <>
      {/* <div className="container login">
        <div className="row logo justify-content-center">
          <div className="col-lg-10">
            <a href="#/">
              <h1>로그인</h1>
            </a>
          </div>
        </div>
        <div className="row id justify-content-center">
          <div className="col-lg-10">
            <LoginIdInput loginInputId={loginInputId} />
          </div>
        </div>
        <div className="row pwd justify-content-center">
          <div className="col-lg-10">
            <LoginPwdInput loginInputPwd={loginInputPwd} />
          </div>
          <div className="row error justify-content-center">
            <div className="col-lg-10"></div>
          </div>
        </div>
        <div className="row button justify-content-center">
          <div className="col-lg-10">
            <LoginButton Login={Login} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <MoveToJoin />
          </div>
        </div>
      </div> */}
      <div className="loginBackground">
        <Container className="containerLog">
          <Row className="TopMargin" />
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              class="bi bi-box"
              viewBox="0 0 16 16"
            >
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
            </svg>
          </div>
          <Row className="ConMargin" />
          <Row className="row logo justify-content-center">
            <Col className="col-lg-5 loginBox">
              <Row className="row logo justify-content-center">
                <Col className="col-lg-8">
                  <h3 className="topLogo">
                    <a>로그인</a>
                  </h3>
                </Col>
              </Row>
              <Row className="row id justify-content-center">
                <Col className="col-lg-8">
                  <LoginIdInput loginInputId={loginInputId} />
                </Col>
              </Row>
              <Row className="row pwd justify-content-center">
                <Col className="col-lg-8">
                  <LoginPwdInput loginInputPwd={loginInputPwd} />
                </Col>
                <Row className="row error justify-content-center">
                  <Col className="col-lg-8"></Col>
                </Row>
              </Row>
              <Row className="row button justify-content-center">
                <Col className="col-lg-8">
                  <LoginButton Login={Login} />
                </Col>
              </Row>
              <Row className="row justify-content-center">
                <Col className="col-lg-8 joinLink">
                  <MoveToJoin />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
