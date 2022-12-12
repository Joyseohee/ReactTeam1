import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyReviewTd from "../components/Mypage/MyReviewTd";

export default function MyReview() {
  const reviewList = useSelector((state) => state.review.reviewList);
  const filterStatus = useSelector((state) => state.review.filterStatus);

  const sortedReviewList = [...reviewList];
  sortedReviewList.sort((a, b) => new Date(b.time) - new Date(a.time));

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
      <div class="container text-center" style={{ color: "white" }}>
        <div class="row">
          <div class="col">
            <table class="table" style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>글번호</th>
                  <th>영화 제목</th>
                  <th>내 리뷰</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                {ItemReviewList.map((review, i) => {
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
