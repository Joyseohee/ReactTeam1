import { useEffect, useState } from "react";
import Movie from "../Common/Movie";

export default function ShowLikes() {
  let [recentId, setRecentId] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("likestore");
    arr = JSON.parse(arr);
    arr = new Set(arr);
    arr = [...arr];
    setRecentId(arr);
  }, []);

  return (
    <div style={{ color: "white" }}>
      {recentId === null ? (
        <div>기대하고 있는 영화가 없습니다</div>
      ) : (
        recentId.map((LikesId) => {
          return <Movie id={LikesId} />;
        })
      )}
    </div>
  );
}
