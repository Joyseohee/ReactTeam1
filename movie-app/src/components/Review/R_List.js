import React from "react";
import Review from "./Review";
function R_List({ movie }) {
  return (
    <div className="flex-container ">
      {movie.map((movie) => (
        <Review movie={movie} />
      ))}
    </div>
  );
}
export default R_List;
