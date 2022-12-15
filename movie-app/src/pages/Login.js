import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import { Col, Container, Row } from "react-bootstrap";
import LoginButton from "../components/Login/LoginButton";
import MoveToJoin from "../components/Login/MoveToJoin";
import LoginIdInput from "../components/Login/LoginIdInput";
import LoginPwdInput from "../components/Login/LoginPwdInput";
import Logo from "../components/Common/Logo";

export default function Mypage() {
  const navigate = useNavigate();

  // 로그인 성공 혹은 실패 여부 체크
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

  // 입력한 아이디, 비밀번호가 저장된 아이디, 비밀번호와 일치하는지 확인
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

  useEffect(() => {
    setLoginId(localStorage.getItem("accountId"));
    setLoginPwd(localStorage.getItem("accountPwd"));
  });

  return (
    <>
      <div className="loginBackground">
        <div className="loginOpacity">
          <Container className="containerLog">
            <Row className="TopMargin" />
            <div className="logo">
              <Logo />
            </div>
            <Row className="ConMargin" />
            <Row className="row logo justify-content-center">
              <Col className="col-lg-5 loginBox shadow p-3 mb-5 rounded">
                <Row className="row logo justify-content-center">
                  <Col className="col-lg-8">
                    <h3 className="topLogo">
                      <a>로그인</a>
                    </h3>
                  </Col>
                </Row>
                <Row className="row id justify-content-center">
                  <Col className="col-lg-8">
                    {/* 아이디 input */}
                    <LoginIdInput loginInputId={loginInputId} />
                  </Col>
                </Row>
                <Row className="row pwd justify-content-center">
                  <Col className="col-lg-8">
                    {/* 비밀번호 input */}
                    <LoginPwdInput loginInputPwd={loginInputPwd} />
                  </Col>
                  <Row className="row error justify-content-center">
                    <Col className="col-lg-8"></Col>
                  </Row>
                </Row>
                <Row className="row button justify-content-center">
                  <Col className="col-lg-8">
                    {/* 로그인 버튼 */}
                    <LoginButton Login={Login} />
                  </Col>
                </Row>
                <Row className="row justify-content-center">
                  <Col className="col-lg-8 joinLink">
                    {/* 회원 가입 페이지로 이동 */}
                    <MoveToJoin />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
