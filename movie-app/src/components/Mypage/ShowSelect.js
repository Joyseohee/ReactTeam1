import MyReview from "../../pages/MyReview";
import Likes from "../../pages/Likes";

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
        <MyReview />
      </div>
    );
  }
}
