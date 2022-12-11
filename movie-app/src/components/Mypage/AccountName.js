import React, { useEffect, useState } from "react";

export default function AccountName() {
  let [loginId, setLoginId] = useState();
  let [loginPwd, setLoginPwd] = useState();
  let [loginNick, setLoginNick] = useState();

  useEffect(() => {
    setLoginId(localStorage.getItem("accountId"));
    setLoginPwd(localStorage.getItem("accountPwd"));
    setLoginNick(localStorage.getItem("accountNick"));
  }, []);

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">{loginId}</div>
          <div className="col">{loginNick}</div>
        </div>
      </div>
    </>
  );
}
