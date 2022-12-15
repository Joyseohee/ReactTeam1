import React, { useEffect, useState } from "react";
import "./css/Join.css";
import Header from "../components/Common/header";
import IdInput from "../components/Join/IdInput";
import PwdInput from "../components/Join/PwdInput";
import PwdInput2 from "../components/Join/PwdInput2";
import GenreInput from "../components/Join/GenreInput";
import JoinButton from "../components/Join/JoinButton";
import NickInput from "../components/Join/NickInput";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Common/Footer";

export default function Join() {
  let [loginId, setLoginId] = useState();
  let [loginPwd, setLoginPwd] = useState();
  let [loginNick, setLoginNick] = useState();

  // 회원가입 버튼 누르고 회원가입 시 로컬 스토리지에 데이터 저장
  const Join = () => {
    localStorage.setItem("accountId", loginId);
    localStorage.setItem("accountPwd", loginPwd);
    localStorage.setItem("accountNick", loginNick);
    setLoginId(localStorage.getItem("accountId"));
    setLoginPwd(localStorage.getItem("accountPwd"));
    setLoginNick(localStorage.getItem("accountNick"));
  };

  // 정규표현식 확인 및 데이터 입력
  let [isIdValid, setIsIdValid] = useState(false);
  let [isPwdValid, setIsPwdValid] = useState(false);

  let [isIdOk, setIsIdOk] = useState("is-invalid");
  const idCheck = (formInputId) => {
    let idPattern = /^[a-z0-9]{5,12}$/;
    setIsIdValid(idPattern.test(formInputId));
    setLoginId(formInputId);
  };

  const inputNick = (nickName) => {
    setLoginNick(nickName);
  };

  let [inputPwd, setInputPwd] = useState();
  let [isPwdOk, setIsPwdOk] = useState("is-invalid");
  const pwdCheck = (formInputPwd) => {
    setInputPwd(formInputPwd);
    let pwdPattern = /^[A-Za-z0-9]{8,20}$/;
    setIsPwdValid(pwdPattern.test(formInputPwd));
  };

  let [isPwd2Ok, setIsPwd2Ok] = useState();
  let [isPwd2Valid, setIsPwd2Valid] = useState(false);
  const pwdCheckProper = (formInputPwd) => {
    setIsPwd2Valid(formInputPwd == inputPwd);
    setLoginPwd(inputPwd);
  };

  let [disabledJoinBtn, setDisabledJoinBtn] = useState(false);

  useEffect(() => {
    if (isIdValid) {
      setIsIdOk("is-valid");
    } else {
      setIsIdOk("is-invalid");
    }

    if (isPwdValid) {
      setIsPwdOk("is-valid");
    } else {
      setIsPwdOk("is-invalid");
    }

    if (isPwd2Valid) {
      setIsPwd2Ok("is-valid");
    } else {
      setIsPwd2Ok("is-invalid");
    }

    if (!isIdValid || !isPwdValid || !isPwd2Valid) {
      setDisabledJoinBtn(true);
    } else {
      setDisabledJoinBtn(false);
    }

    setLoginId(loginId);
    setLoginPwd(loginPwd);
    setLoginNick(loginNick);
  });

  return (
    <>
      <Header />
      <Container className="join">
        <Row className="row logo align-items-end justify-content-center">
          <Col className="col-md-6 col-lg-4 marginTop"></Col>
        </Row>
        <Row className="row logo align-items-end justify-content-center">
          <Col className="col-md-6 col-lg-4">
            <a className="signUp" href="/join">
              회원가입
            </a>
          </Col>
        </Row>
        {/* 아이디 input */}
        <IdInput isIdOk={isIdOk} idCheck={idCheck} />
        {/* 닉네임 input */}
        <NickInput inputNick={inputNick} />
        {/* 비밀번호 input */}
        <PwdInput isPwdOk={isPwdOk} pwdCheck={pwdCheck} />
        {/* 비밀번호 확인 input */}
        <PwdInput2 isPwd2Ok={isPwd2Ok} pwdCheckProper={pwdCheckProper} />
        {/* 장르 input */}
        <GenreInput isPwd2Ok={isPwd2Ok} pwdCheckProper={pwdCheckProper} />
        {/* 회원가입 input */}
        <JoinButton disabledJoinBtn={disabledJoinBtn} Join={Join} />
      </Container>
      <Footer></Footer>
    </>
  );
}
