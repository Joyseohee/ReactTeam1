import { useEffect } from "react";
import { useSelector } from "react-redux";
import MyReviewTd from "./MyReviewTd";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyReview() {
  const reviewList = useSelector((state) => state.review.reviewList);
  const filterStatus = useSelector((state) => state.review.filterStatus);

  const sortedReviewList = [...reviewList];
  sortedReviewList.sort((a, b) => new Date(b.date) - new Date(a.date));

  const ItemReviewList = sortedReviewList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container text-center" style={{ color: "white" }}>
        <div className="row">
          <div className="col">
            {ItemReviewList.slice(0)
              .reverse()
              .map((review) => {
                return (
                  <>
                    <div
                      data-aos="fade-in"
                      data-aos-offset="100"
                      // data-aos-delay="500"
                      data-aos-duration="800"
                      data-aos-easing="ease-in-out"
                      className="likeMovieCard"
                    >
                      <MyReviewTd review={review} key={review.movie_id} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
