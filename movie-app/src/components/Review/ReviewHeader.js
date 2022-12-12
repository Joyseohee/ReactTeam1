import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { SelectButton } from "./Button";
import styles from "./scss/Review.module.scss";
import ReviewModal from "./ReviewModal";
// import { updateFilterStatus } from './todoSlice';
import { updateFilterStatus } from "../../store";

function ReviewHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  // const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  // const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  // const updateFilter = (e) => { // 업데이트 수정 필요
  //   setFilterStatus(e.target.value);
  //   dispatch(updateFilterStatus(e.target.value));
  // };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        리뷰 입력
      </Button>
      {/* <SelectButton
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      ></SelectButton> */}
      <ReviewModal
        type="add"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default ReviewHeader;
