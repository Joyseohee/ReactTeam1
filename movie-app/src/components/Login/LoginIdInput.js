export default function LoginIdInput({ loginInputId }) {
  return (
    <>
      <input
        type="text"
        className="form-control id"
        placeholder="아이디"
        required
        onBlur={(e) => {
          loginInputId(e.target.value);
        }}
      />
    </>
  );
}
