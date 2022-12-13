export default function IdInput({ isIdOk, idCheck }) {
  return (
    <>
      <div className="row align-items-start justify-content-center needs-validation">
        <div className="col-md-6 col-lg-4">
          <label className="form-label">아이디</label>
          <input
            type="text"
            className={`form-control ${isIdOk}`}
            placeholder="아이디"
            required
            onChange={(e) => {
              idCheck(e.target.value);
            }}
          />
          <div className="valid-feedback">사용 가능한 아이디입니다.</div>
          <div className="invalid-feedback">
            영문 소문자와 숫자를 조합해서 5글자 이상 12글자 이하
          </div>
        </div>
      </div>
    </>
  );
}
