import { useEffect, useState } from "react";

export default function ClickLikes(props) {
  let id = props.id;
  let like = props.like;
  let style = props.style;

  // 좋아요
  let [recentId, setRecentId] = useState([]);
  let [likeMovie, setLikeMovie] = useState(0);

  // 좋아요 버튼 클릭
  const clickLikes = () => {
    let checkId = Number(id.id);
    setLikeMovie(localStorage.getItem(`checkLike${checkId}`));
    // 좋아요 누른 영화
    if (likeMovie === 1) {
      cancleLikes();
    }
    // 좋아요 안 누른 영화
    if (likeMovie === 0 || likeMovie == null) {
      storeLikes();
    }
  };

  // 좋아요 함수
  const storeLikes = () => {
    let arr = localStorage.getItem("likestore");
    let checkId = Number(id.id);
    setLikeMovie(likeMovie + 1);
    localStorage.setItem(`checkLike${checkId}`, likeMovie);
    console.log(likeMovie);
    if (arr == null) {
      localStorage.setItem("likestore", JSON.stringify([checkId]));
      setRecentId([checkId]);
    } else {
      arr = JSON.parse(arr);
      arr.push(checkId);
      arr = new Set(arr);
      arr = [...arr];
      localStorage.setItem("likestore", JSON.stringify(arr));
      setRecentId(arr);
    }
  };

  // 좋아요 취소 함수
  const cancleLikes = () => {
    let arr = localStorage.getItem("likestore");
    arr = JSON.parse(arr);
    let checkId = Number(id.id);
    setLikeMovie(likeMovie - 1);
    localStorage.setItem(`checkLike${checkId}`, likeMovie);
    let filtered = arr.filter((element) => element !== checkId);
    arr = [...filtered];
    localStorage.setItem("likestore", JSON.stringify(arr));
    setRecentId(arr);
  };

  return (
    <>
      <img
        src={like}
        className={style.vote_count_img}
        onClick={() => {
          clickLikes(); // 클릭 시 좋아요
        }}
      />{" "}
    </>
  );
}
