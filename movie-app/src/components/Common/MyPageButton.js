import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function MyPageButton() {
  let [loginCheck, setLoginCheck] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    let arr = localStorage.getItem("loginCheck");
    if (arr != null) {
      setLoginCheck(localStorage.getItem("loginCheck"));
    }
  }, [loginCheck]);

  const navigateMyPageOrNot = () => {
    if (loginCheck == 0) {
      alert("로그인을 진행해주세요");
      navigate("/login");
    }
    if (loginCheck == 1) {
      navigate("/mypage");
    }
  };

  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={() => {
        navigateMyPageOrNot();
      }}
    >
      <AccountCircle />
    </IconButton>
  );
}
