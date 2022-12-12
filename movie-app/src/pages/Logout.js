import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Mypage() {
  const navigate = useNavigate();

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
