import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyReviewTd from "./MyReviewTd";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyReview() {
  const reviewList = useSelector((state) => state.review.reviewList);
  const filterStatus = useSelector((state) => state.review.filterStatus);

  const sortedReviewList = [...reviewList];
  sortedReviewList.sort((a, b) => new Date(b.date) - new Date(a.date));

  let [change, setChange] = useState(false);

  const ItemReviewList = sortedReviewList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  useEffect(() => {
    AOS.init();
    let timer = setTimeout(() => {
      setChange(true);
    }, 1);

    return () => {
      clearTimeout(timer);
    };
  }, [change]);

  return (
    <>
      {sortedReviewList.length > 0 ? (
        ItemReviewList.slice(0)
          .reverse()
          .map((review) => {
            return (
              <>
                <div
                  className="container text-center"
                  style={{ color: "white" }}
                >
                  <div className="row">
                    <div className="col">
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
                    </div>
                  </div>
                </div>
              </>
            );
          })
      ) : (
        <h4 style={{ color: "white", marginTop: "50px" }}>
          작성한 리뷰가 없습니다.
        </h4>
      )}
    </>
  );
}
