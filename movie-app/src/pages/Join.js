import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IdInput from "../components/Join/IdInput";
import PwdInput from "../components/Join/PwdInput";
import PwdInput2 from "../components/Join/PwdInput2";
import GenreInput from "../components/Join/GenreInput";
import JoinButton from "../components/Join/JoinButton";
import NickInput from "../components/Join/NickInput";

export default function Join() {
  const navigate = useNavigate();

  let [loginId, setLoginId] = useState();
  let [loginPwd, setLoginPwd] = useState();
  let [loginNick, setLoginNick] = useState();

  const Join = () => {
    localStorage.setItem("accountId", loginId);
    localStorage.setItem("accountPwd", loginPwd);
    localStorage.setItem("accountNick", loginNick);
    setLoginId(localStorage.getItem("accountId"));
    setLoginPwd(localStorage.getItem("accountPwd"));
    setLoginNick(localStorage.getItem("accountNick"));
  };

  let [isIdValid, setIsIdValid] = useState(false);
  let [isPwdValid, setIsPwdValid] = useState(false);

  let [isIdOk, setIsIdOk] = useState("is-invalid");
  const idCheck = (formInputId) => {
    let idPattern = /^[a-z0-9]{5,12}$/;
    setIsIdValid(idPattern.test(formInputId));
    setLoginId(formInputId);
  };

  const inputNick = (nickName) => {
    setLoginNick(nickName);
  };

  let [inputPwd, setInputPwd] = useState();
  let [isPwdOk, setIsPwdOk] = useState("is-invalid");
  const pwdCheck = (formInputPwd) => {
    setInputPwd(formInputPwd);
    let pwdPattern = /^[A-Za-z0-9]{8,20}$/;
    setIsPwdValid(pwdPattern.test(formInputPwd));
  };

  let [isPwd2Ok, setIsPwd2Ok] = useState();
  let [isPwd2Valid, setIsPwd2Valid] = useState(false);
  const pwdCheckProper = (formInputPwd) => {
    setIsPwd2Valid(formInputPwd == inputPwd);
    setLoginPwd(inputPwd);
  };

  let [disabledJoinBtn, setDisabledJoinBtn] = useState(false);

  useEffect(() => {
    if (isIdValid) {
      setIsIdOk("is-valid");
    } else {
      setIsIdOk("is-invalid");
    }

    if (isPwdValid) {
      setIsPwdOk("is-valid");
    } else {
      setIsPwdOk("is-invalid");
    }

    if (isPwd2Valid) {
      setIsPwd2Ok("is-valid");
    } else {
      setIsPwd2Ok("is-invalid");
    }

    if (!isIdValid || !isPwdValid || !isPwd2Valid) {
      setDisabledJoinBtn(true);
    } else {
      setDisabledJoinBtn(false);
    }

    setLoginId(loginId);
    setLoginPwd(loginPwd);
    setLoginNick(loginNick);
  });

  return (
    <>
      <div className="">
        <div className="row logo align-items-end justify-content-center">
          <div className="col-md-6 col-lg-4">
            <a href="${path}/">회원가입</a>
          </div>
        </div>
        <IdInput isIdOk={isIdOk} idCheck={idCheck} />
        <NickInput inputNick={inputNick} />
        <PwdInput isPwdOk={isPwdOk} pwdCheck={pwdCheck} />
        <PwdInput2 isPwd2Ok={isPwd2Ok} pwdCheckProper={pwdCheckProper} />
        <GenreInput isPwd2Ok={isPwd2Ok} pwdCheckProper={pwdCheckProper} />
        <JoinButton disabledJoinBtn={disabledJoinBtn} Join={Join} />
      </div>
    </>
  );
}
