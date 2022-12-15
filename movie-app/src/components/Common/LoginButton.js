import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  let [loginCheck, setLoginCheck] = useState(0);
  let [LogCheck, setLogCheck] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    let arr = localStorage.getItem("loginCheck");
    if (arr != null) {
      setLoginCheck(localStorage.getItem("loginCheck"));
    }
    loginCheck == 1 ? setLogCheck("Logout") : setLogCheck("Login");
  }, [loginCheck, LogCheck]);

  const chooseWhatToDo = () => {
    if (loginCheck == 1) {
      setLogCheck("Login");
      Logout();
    }
    if (loginCheck == 0) {
      setLogCheck("Logout");
      navigate("/login");
    }
  };

  const Logout = () => {
    localStorage.setItem("loginCheck", 0);
    alert("로그아웃됐습니다");
    navigate("/");
  };

  return (
    <Button
      color="inherit"
      onClick={() => {
        chooseWhatToDo();
      }}
    >
      {LogCheck}
    </Button>
  );
}
