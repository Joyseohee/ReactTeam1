import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  let [loginCheck, setLoginCheck] = useState(0);
  let [LogCheck, setLogCheck] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLoginCheck(localStorage.getItem("loginCheck"));

    if (loginCheck == 1) {
      setLogCheck("Logout");
    } else {
      setLogCheck("Login");
    }
  }, [loginCheck, LogCheck]);

  const chooseWhatToDo = () => {
    if (loginCheck == 1) {
      Logout();
    }
    if (loginCheck == 0) {
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
