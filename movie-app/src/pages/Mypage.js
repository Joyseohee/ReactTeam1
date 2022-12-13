import "./css/Mypage.css";
import { useEffect, useState } from "react";
import MypageReal from "../components/Mypage/MyPageReal";

export default function Mypage() {
  let [loginCheck, setLoginCheck] = useState(0);

  useEffect(() => {
    setLoginCheck(localStorage.getItem("loginCheck"));
  }, [loginCheck]);

  return (
    <>{loginCheck === 0 ? <div>로그인을 해주세요</div> : <MypageReal />}</>
  );
}
