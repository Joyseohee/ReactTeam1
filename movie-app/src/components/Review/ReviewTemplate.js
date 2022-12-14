import React from "react";
import { Toaster } from "react-hot-toast";
import "./scss/ReviewTemplate.scss";
import ReviewContent from "./ReviewContent";
import ReviewHeader from "./ReviewHeader";
import ReviewPageTitle from "./ReviewPageTitle";
import styles from "./scss/Review.module.scss";

const ReviewTemplate = () => {
  return (
    <>
      <div className="ReviewList-Template">
        <ReviewPageTitle>이 영화 어떠셨나요??</ReviewPageTitle>
        <div className={styles.app__wrapper}>
          <ReviewHeader />
          <ReviewContent />
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
};

export default ReviewTemplate;
