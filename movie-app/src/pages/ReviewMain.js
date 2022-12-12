import React from "react";
import Review from "../components/Review/Review";
import ReviewTemplate from "../components/Review/ReviewTemplate";

function ReviewMain() {
  return (
    <div className="ReviewMain-contaniner">
      <div className="ReviewTest">
        <ReviewTemplate></ReviewTemplate>
      </div>
      <div className="ReviewPage">
        <Review></Review>
      </div>
    </div>
  );
}

export default ReviewMain;
