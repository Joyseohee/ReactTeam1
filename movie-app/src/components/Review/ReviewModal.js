import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
// import { addTodo, updateTodo } from "./todoSlice";
import { addReview, updateReview } from "../../store";
import styles from "./scss/Reviewmodal.module.scss";
import Button from "./Button";
import Rating from "./Rating";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};

function ReviewModal({ type, modalOpen, setModalOpen, review }) {
  let id = useParams();
  const dispatch = useDispatch();
  const [authorid, setAuthorid] = useState("SMPark1234"); // 유저 아이디 값 삽입
  // const [authorid, setAuthorid] = useState(localStorage.getItem("accountId")); // 유저 아이디 값 삽입
  const [authorNick, setAuthorNick] = useState("SMPark"); // 유저 닉네임 값 삽입
  // const [authorNick, setAuthorNick] = useState(
  //   localStorage.getItem("accountNick")
  // ); // 유저 닉네임 값 삽입
  const [movie_id, setMovie_id] = useState(id.id); // 영화 선택 -> id 값 삽입
  const [rate, setRate] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (type === "update" && review) {
      setAuthorid(review.authorid);
      setAuthorNick(review.setAuthorNick);
      setMovie_id(review.setMovie_id);
      setRate(review.rate);
      setContent(review.content);
    } else {
      setRate("");
      setContent("");
    }
  }, [type, review, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rate === "" && content === "") {
      toast.error("리뷰를 입력해주세요");
      return;
    }
    if (rate && content) {
      if (type === "add") {
        dispatch(
          addReview({
            id: uuid(),
            authorid,
            authorNick,
            movie_id,
            rate,
            content,
            date: new Date().toLocaleString(),
          })
        );
        toast.success("등록이 완료되었습니다.");
      }
      if (type === "update") {
        if (review.rate !== rate || review.content !== content) {
          dispatch(
            updateReview({
              ...review,
              authorid,
              authorNick,
              movie_id,
              rate,
              content,
            })
          );
          toast.success("수정이 완료되었습니다.");
        } else {
          toast.error("수정을 실패하셨습니다.");
          return;
        }
      }
      setModalOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={styles.closeButton}
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
              // animation
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}>
                {type === "add" ? "Add" : "Update"} Review
              </h1>
              <input
                type="hidden"
                id="authorid"
                value={authorid}
                onChange={(e) => setAuthorid(e.target.value)}
              />
              <input
                type="hidden"
                id="authorNick"
                value={authorNick}
                onChange={(e) => setAuthorNick(e.target.value)}
              />
              <input
                type="hidden"
                id="movie_id"
                value={movie_id}
                onChange={(e) => setMovie_id(e.target.value)}
              />
              <p>
                <label htmlFor="rate">
                  rate
                  <input
                    type="text"
                    id="rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                  {/* <Rating
                  // setRate={setRate}
                  rate={`${(
                    <input
                      type="onClick"
                      id="rate"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    />
                  )}`}
                /> */}
                </label>
              </p>
              <label htmlFor="content">
                content
                <input
                  type="text"
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  {type === "add" ? "Add Review" : "Update Review"}
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ReviewModal;
