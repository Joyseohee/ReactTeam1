import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./scss/Review.module.scss";
import ReviewItem from "./ReviewItem";

function ReviewContent() {
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
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {ItemReviewList && ItemReviewList.length > 0 ? (
          ItemReviewList.slice(0)
            .reverse()
            .map((review) => <ReviewItem key={review.id} review={review} />)
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            리뷰가 없어용
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ReviewContent;

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
