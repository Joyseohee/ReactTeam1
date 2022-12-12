import "./css/Mypage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Join from "./Join";

export default function Mypage() {
  const navigate = useNavigate();

  let [loginId, setLoginId] = useState();
  let [loginPwd, setLoginPwd] = useState();
  let [loginNick, setLoginNick] = useState();

  const Login = () => {
    localStorage.setItem("accountId", "team1");
    localStorage.setItem("accountPwd", "0000");
    localStorage.setItem("accountNick", "1팀");
    setLoginId(localStorage.getItem("accountId"));
    setLoginPwd(localStorage.getItem("accountPwd"));
    setLoginNick(localStorage.getItem("accountNick"));
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
            />
          </div>
          <div className="row error justify-content-center">
            <div className="col-lg-10">
              {/* <c:if test="${param.error != null}">
               <p>아이디와 비밀번호를 확인해주세요</p>
               ${prevPage}
            </c:if>
            <c:if test="${param.error == null}">
            </c:if> */}
            </div>
          </div>
        </div>
        <div className="row button justify-content-center">
          <div className="col-lg-10">
            <button
              className="w-100 btn btn-lg btn-dark"
              type="submit"
              onClick={() => {
                Login();
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
