import { motion } from "framer-motion";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
// import { deleteTodo, updateTodo } from "./todoSlice";
import { deleteReview, updateReview } from "../../store";
import styles from "./scss/ItemReview.module.scss";
import CheckButton from "./CheckButton";
import ReviewModal from "./ReviewModal";
import Rating from "./Rating";
import ReviewError from "./ReviewError";
import { useParams } from "react-router-dom";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// 여기서 받은 값을 출력합니다.
// authorNick : 유저 닉네임 / authorid : 유저 id / content : 내용 / date : 등록한 날짜(서버시간) / movie_id : 영화 id / rate : 평점

function ReviewItem({ review }) {
  let id = useParams();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // console.log(id.id);

  // useEffect(() => {
  //   if (todo.status === "complete") {
  //     setChecked(true);
  //   } else {
  //     setChecked(false);
  //   }
  // }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(deleteReview({ ...review }));
  };

  const handleDelete = () => {
    dispatch(deleteReview(review.id));
    toast.success("리뷰가 삭제되었습니다.");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      {id.id === review.movie_id ? ( // 조건부 (원하는 )
        <div className="review-test">
          <motion.div className={styles.item} variants={child}>
            <div className={styles.todoDetails}>
              <CheckButton checked={checked} handleCheck={handleCheck} />
              <div className={styles.texts}>
                <p>{review.content}</p>
                <hr />
                <p>{review.authorNick}</p>
                <Rating
                  // setRate={setRate}
                  rate={review.rate / 2}
                />
                <p>{review.content}</p>
                <p>{review.date}</p>
              </div>
            </div>
            {/* <div className={styles.todoActions}> // 수정, 삭제기능
              <div
                className={styles.icon}
                onClick={() => handleDelete()}
                onKeyDown={() => handleDelete()}
                tabIndex={0}
                role="button"
              >
                <MdDelete />
              </div>
              <div
                className={styles.icon}
                onClick={() => handleUpdate()}
                onKeyDown={() => handleUpdate()}
                tabIndex={0}
                role="button"
              >
                <MdEdit />
              </div>
            </div> */}
          </motion.div>
          {/* <ReviewModal /> // 수정기능 있을 때 같이 있어야함
            type="update"
            modalOpen={updateModalOpen}
            setModalOpen={setUpdateModalOpen}
            review={review}
          /> */}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ReviewItem;
