import "./css/Mypage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Join from "./Join";

export default function Mypage() {
  const navigate = useNavigate();

  let [loginId, setLoginId] = useState();
  let [loginPwd, setLoginPwd] = useState();

  const Logout = () => {
    localStorage.setItem("loginCheck", 0);
    alert("로그아웃됐습니다");
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <>
      <button
        className="w-100 btn btn-lg btn-dark"
        type="submit"
        onClick={() => {
          Logout();
        }}
      >
        로그아웃
      </button>
    </>
  );
}
