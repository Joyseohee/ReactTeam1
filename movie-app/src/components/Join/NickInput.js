export default function NickInput({ inputNick }) {
  return (
    <>
      <div className="row align-items-start justify-content-center needs-validation">
        <div className="col-md-6 col-lg-4">
          <label className="form-label">닉네임</label>
          <input
            type="text"
            className="form-control"
            placeholder="닉네임"
            required
            onBlur={(e) => {
              inputNick(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
