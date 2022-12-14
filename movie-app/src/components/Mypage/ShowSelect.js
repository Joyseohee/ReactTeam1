import MyReview from "./MyReview/MyReview";
import Likes from "./MyLikes/Likes";
import MyRecommand from "./MyReview/MyRecommand";

export default function ShowSelect({ mpClickTab }) {
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
        <MyRecommand />
      </div>
    );
  }
  if (mpClickTab == 3) {
    return (
      <div className="mgClickBox">
        <MyReview />
      </div>
    );
  }
}
