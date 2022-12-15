import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./scss/StarRating.scss";

const StarRating = ({ rate, setRate, getRatingValue }) => {
  const [hover, setHover] = useState(null); // hover 적용(css)

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <div className="starinput">
              <input
                type="radio"
                name="rate"
                value={ratingValue}
                onClick={() => setRate(ratingValue)}
                onChange={getRatingValue}
              ></input>
              <FaStar
                className="star"
                color={ratingValue <= (hover || rate) ? "#ffc107" : "e4e5e9"} // rate 값에 따른 별 모양 불 들어오기
                size={100}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </div>
          </label>
        );
      })}
      {/* <div>선택하신 별점 : {rate} </div> */}
    </div>
  );
};

export default StarRating;
