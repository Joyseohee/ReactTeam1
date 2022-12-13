import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyReviewTd from "../components/Mypage/MyReview/MyReviewTd";

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

  let [myReviewCount, setMyReviewCount] = useState(0);

  useEffect(() => {}, [myReviewCount]);

  return (
    <>
      <div className="container text-center" style={{ color: "white" }}>
        <div className="row">
          <div className="col">
            <table className="table" style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>글번호</th>
                  <th>영화 제목</th>
                  <th>내 리뷰</th>
                  <th>별점</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                {ItemReviewList.slice(0)
                  .reverse()
                  .map((review, i) => {
                    return (
                      <>
                        <MyReviewTd
                          review={review}
                          index={i}
                          key={review.movie_id}
                        />
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
