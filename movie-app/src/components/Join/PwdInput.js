export default function PwdInput({ isPwdOk, pwdCheck }) {
  return (
    <>
      <div className="row align-items-end justify-content-center needs-validation">
        <div className="col-md-6 col-lg-4">
          <label className="form-label">비밀번호</label>
          <input
            type="password"
            className={`form-control ${isPwdOk}`}
            placeholder="비밀번호"
            required
            onChange={(e) => {
              pwdCheck(e.target.value);
            }}
          />
          <div className="valid-feedback">사용 가능한 비밀번호입니다.</div>
          <div className="invalid-feedback">
            영문자와 숫자를 조합해서 8글자 이상 20글자 이하
          </div>
        </div>
      </div>
    </>
  );
}
