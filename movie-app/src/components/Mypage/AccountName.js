import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

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
      <div className="wrapperAccountName">
        <table>
          <tr className="align-end">
            <td className="LoginId">{loginId}</td>
            <td className="LoginNick">{loginNick}</td>
          </tr>
        </table>
      </div>
    </>
  );
}
