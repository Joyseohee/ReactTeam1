import MyReview from "../../pages/MyReview";
import Likes from "../../pages/Likes";
import { useEffect } from "react";

export default function ShowSelect({ mpClickTab }) {
  useEffect(() => {}, [mpClickTab]);

  if (mpClickTab == 1) {
    return (
      <div className="mgClickBox">
        <Likes />
      </div>
    );
  }
  if (mpClickTab == 2) {
    return (
      <div className="mgClickBox">
        <MyReview />
      </div>
    );
  }
}
