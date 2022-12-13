import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/Login/LoginButton";
import MoveToJoin from "../components/Login/MoveToJoin";
import LoginIdInput from "../components/Login/LoginIdInput";
import LoginPwdInput from "../components/Login/LoginPwdInput";

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
      <div className="container login">
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
      </div>
    </>
  );
}
