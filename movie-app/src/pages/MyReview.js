import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmdbAPI from "../tmdbAPI";
import MyReviewTd from "../components/Mypage/MyReviewTd";
import { Modal, Button } from "react-bootstrap";

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
                {ItemReviewList.map((review) => {
                  return (
                    <>
                      <MyReviewTd review={review} />
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
