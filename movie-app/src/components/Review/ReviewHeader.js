import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { SelectButton } from "./Button";
import styles from "./scss/Review.module.scss";
import ReviewModal from "./ReviewModal";

function ReviewHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={styles.appHeader}>
      <Button
        variant="primary"
        onClick={() => setModalOpen(true)}
        style={{
          backgroundColor: "black",
          border: "solid 3px red",
        }}
      >
        리뷰 등록
      </Button>
      <ReviewModal
        type="add"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default ReviewHeader;
