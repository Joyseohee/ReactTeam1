import { useNavigate } from "react-router-dom";

export default function JoinButton({ disabledJoinBtn, Join }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="row submit align-items-end justify-content-center needs-validation">
        <div className="col-md-6 col-lg-4">
          <button
            type="button"
            className="w-100 btn btn-lg btn-dark"
            value="회원가입"
            disabled={disabledJoinBtn}
            onClick={() => {
              Join();
              navigate("/login");
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}
