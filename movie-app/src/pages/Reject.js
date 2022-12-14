import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Reject() {
  return (
    <>
      <Alert style={{ marginTop: "500px" }} variant="dark">
        권한이 없습니다.
        <br />
        로그인해주세요.
        <br />
        <br />
        <Alert.Link href="/login">로그인 페이지로 이동</Alert.Link>
      </Alert>
    </>
  );
}

// loginCheck === 0 ? setLoginCheck(0) : return (<MypageReal />);
