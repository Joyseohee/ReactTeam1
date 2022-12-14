import { useEffect, useState } from "react";

export default function NoMovie() {
  return (
    <>
      <div style={{ color: "white", marginTop: "50px" }}>
        {" "}
        찜한 영화가 없습니다! <br />
        <br />
        영화 상세 페이지에서 좋아요 버튼을 눌러주세요.
      </div>
    </>
  );
}
