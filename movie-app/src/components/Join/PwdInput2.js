export default function PwdInput2({ isPwd2Ok, pwdCheckProper }) {
  return (
    <>
      <div className="row align-items-end justify-content-center needs-validation">
        <div className="col-md-6 col-lg-4">
          <label className="form-label">비밀번호 확인</label>
          <input
            type="password"
            className={`form-control ${isPwd2Ok}`}
            placeholder="비밀번호 확인"
            required
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
    </>
  );
}
