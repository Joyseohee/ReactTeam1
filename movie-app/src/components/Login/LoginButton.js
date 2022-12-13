export default function LoginButton({ Login }) {
  return (
    <>
      <button
        className="w-100 btn btn-lg btn-dark"
        type="submit"
        onClick={(e) => {
          Login(e.target.value);
        }}
      >
        로그인
      </button>
    </>
  );
}
