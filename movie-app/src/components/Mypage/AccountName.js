import React, { useEffect, useState } from "react";

export default function AccountName() {
  let [loginId, setLoginId] = useState();
  let [loginNick, setLoginNick] = useState();

  useEffect(() => {
    setLoginId(localStorage.getItem("accountId"));
    setLoginNick(localStorage.getItem("accountNick"));
  }, [loginId, loginNick]);

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
