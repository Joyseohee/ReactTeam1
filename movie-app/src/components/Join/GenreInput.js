export default function GenreInput({ isIdOk, idCheck }) {
  return (
    <>
      <div className="row align-items-end justify-content-center">
        <div className="col-md-6 col-lg-4">
          <label className="form-label">좋아하는 영화 장르</label>
          <input
            type="text"
            className="form-control"
            placeholder="좋아하는 영화 장르를 입력하세요"
          />
        </div>
      </div>
    </>
  );
}
