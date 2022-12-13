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
      <div>추가 가능</div>
      {recentId === null
        ? null
        : recentId.map((LikesId) => {
            return <Movie id={LikesId} />;
          })}
    </div>
  );
}
