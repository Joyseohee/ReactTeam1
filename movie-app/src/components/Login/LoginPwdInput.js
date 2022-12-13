export default function LoginPwdInput({ loginInputPwd }) {
  return (
    <>
      <input
        type="password"
        className="form-control pwd"
        placeholder="비밀번호"
        required
        onBlur={(e) => {
          loginInputPwd(e.target.value);
        }}
      />
    </>
  );
}
