import React from "react";
import StarsRating from "stars-rating";

function Rating({ rate, setRate }) {
  const ratingChanged = (value) => setRate(value);
  return (
    <div className="rate">
      <StarsRating
        count={5}
        onChange={ratingChanged}
        size={24}
        activecolor="#ffd700"
        value={rate}
      />
    </div>
  );
}
export default Rating;
