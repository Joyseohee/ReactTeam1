import React, { useState } from "react";
import Button from "./Button";
import styles from "./scss/Review.module.scss";
import ReviewModal from "./ReviewModal";

function ReviewHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
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
