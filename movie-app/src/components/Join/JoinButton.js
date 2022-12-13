import { useNavigate } from "react-router-dom";

export default function JoinButton({ disabledJoinBtn, Join }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="row submit align-items-end justify-content-center needs-validation">
        <div className="col-md-6 col-lg-4">
          <button
            type="button"
            className="w-100 btn btn-secondary btn-lg"
            value="회원가입"
            disabled={disabledJoinBtn}
            onClick={() => {
              Join();
              navigate("/login");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
