import "./css/Mypage.css";
import { useEffect, useState } from "react";
import MypageReal from "../components/Mypage/MyPageReal";
import Reject from "./Reject";

export default function Mypage() {
  let [loginCheck, setLoginCheck] = useState(0);

  useEffect(() => {
    setLoginCheck(localStorage.getItem("loginCheck"));
  }, [loginCheck]);

  return <>{loginCheck == 0 ? <Reject /> : <MypageReal />}</>;
}
