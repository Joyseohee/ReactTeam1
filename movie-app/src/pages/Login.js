import "./css/Mypage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Join from "./Join";

export default function Mypage() {
  const navigate = useNavigate();

  let [loginId, setLoginId] = useState();
  let [loginPwd, setLoginPwd] = useState();

  const Login = () => {
    if (loginIdOk && loginPwdOk) {
      alert("로그인에 성공했습니다");
      navigate("/");
    } else {
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
            <input
              type="text"
              className="form-control id"
              name="user_id"
              placeholder="아이디"
              required
              autocomplete="off"
              onBlur={(e) => {
                loginInputId(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row pwd justify-content-center">
          <div className="col-lg-10">
            <input
              type="password"
              className="form-control pwd"
              name="user_password"
              placeholder="비밀번호"
              required
              autocomplete="off"
              onBlur={(e) => {
                loginInputPwd(e.target.value);
              }}
            />
          </div>
          <div className="row error justify-content-center">
            <div className="col-lg-10"></div>
          </div>
        </div>
        <div className="row button justify-content-center">
          <div className="col-lg-10">
            <button
              className="w-100 btn btn-lg btn-dark"
              type="submit"
              onClick={(e) => {
                Login(e.target.value);
              }}
            >
              로그인
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <span>
              <a className="link" href="/join">
                회원가입
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
