import "./css/Mypage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

        <div className="row align-items-start justify-content-center needs-validation">
          <div className="col-md-6 col-lg-4">
            <label className="form-label">아이디</label>
            <input
              type="text"
              name="user_id"
              className={`form-control ${isIdOk}`}
              id="validationCustom01"
              placeholder="아이디"
              required
              autocomplete="off"
              onChange={(e) => {
                idCheck(e.target.value);
              }}
            />
            <div className="valid-feedback">사용 가능한 아이디입니다.</div>
            <div className="invalid-feedback">
              영문 소문자와 숫자를 조합해서 5글자 이상 12글자 이하로
              입력해주세요
            </div>
          </div>
        </div>

        <div className="row align-items-start justify-content-center needs-validation">
          <div className="col-md-6 col-lg-4">
            <label className="form-label">닉네임</label>
            <input
              type="text"
              name="user_nick"
              className="form-control"
              placeholder="닉네임"
              required
              autocomplete="off"
              onBlur={(e) => {
                inputNick(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row align-items-end justify-content-center needs-validation">
          <div className="col-md-6 col-lg-4">
            <label className="form-label">비밀번호</label>
            <input
              type="password"
              name="user_password"
              className={`form-control ${isPwdOk}`}
              id="validationCustom02"
              placeholder="비밀번호"
              required
              autocomplete="off"
              onChange={(e) => {
                pwdCheck(e.target.value);
              }}
            />
            <div className="valid-feedback">사용 가능한 비밀번호입니다.</div>
            <div className="invalid-feedback">
              영문자와 숫자를 조합해서 8글자 이상 20글자 이하로 입력해주세요
            </div>
          </div>
        </div>
        <div className="row align-items-end justify-content-center needs-validation">
          <div className="col-md-6 col-lg-4">
            <label className="form-label">비밀번호 확인</label>
            <input
              type="password"
              name="user_password2"
              className={`form-control ${isPwd2Ok}`}
              id="validationCustom03"
              placeholder="비밀번호 확인"
              required
              autocomplete="off"
              onChange={(e) => {
                pwdCheckProper(e.target.value);
              }}
            />
            <div className="valid-feedback">사용 가능한 비밀번호입니다.</div>
            <div className="invalid-feedback">
              입력하신 비밀번호가 일치하지 않습니다.
            </div>
          </div>
        </div>
        <div className="row align-items-end justify-content-center">
          <div className="col-md-6 col-lg-4">
            <label className="form-label">좋아하는 영화 장르</label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              id="validationCustom04"
              placeholder="좋아하는 영화 장르를 입력하세요"
              autocomplete="off"
            />
          </div>
        </div>
        <div className="row submit align-items-end justify-content-center needs-validation">
          <div className="col-md-6 col-lg-4">
            <button
              type="button"
              className="w-100 btn btn-lg btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              value="회원가입"
              disabled={disabledJoinBtn}
              onClick={() => {
                Join();
                navigate("/login");
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
