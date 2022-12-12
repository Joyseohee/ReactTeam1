import "./css/Mypage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      <button
        onClick={() => {
          Login();
        }}
      >
        로그인
      </button>
    </>
  );
}
