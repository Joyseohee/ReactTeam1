import React, { useEffect, useState, useRef, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { addReview, updateReview } from "../../store";
import styles from "./scss/Reviewmodal.module.scss";
import Button from "./Button";
import StarRating from "./StarRating";

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
  const [authorid, setAuthorid] = useState(localStorage.getItem("accountId")); // 유저 아이디 값 삽입
  const [authorNick, setAuthorNick] = useState(
    localStorage.getItem("accountNick")
  ); // 유저 닉네임 값 삽입

  const [movie_id, setMovie_id] = useState(id.id); // 영화 선택 -> id 값 삽입
  const [rate, setRate] = useState("");
  const [content, setContent] = useState("");

  // 별점(starRating) 값을 받아온다
  const getRatingValue = useCallback(
    (e) => {
      setRate(e.target.value);
      console.log("getrating : " + rate);
    },
    [rate]
  );

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
                Review {type === "add" ? "작성" : "수정"}
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
              <div
                className="starbox"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>
                  <label htmlFor="rate">
                    선택하신 별점 : {rate}
                    {/* <input
                    type="text"
                    id="rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  /> */}
                    {/* <select
                    aria-label="Default select example"
                    name="rate"
                    id="rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  >
                    <option>평점</option>
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select> */}
                    <StarRating
                      type="radio"
                      rate={rate}
                      setRate={setRate}
                      getRatingValue={getRatingValue}
                      id="rate"
                      name="rate"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    ></StarRating>
                  </label>
                </p>
              </div>
              <div className={styles.plzContent}>
                <label htmlFor="content">
                  내용
                  {/* <input
                    type="text"
                    id="content"
                    value={content}
                    maxlength="200"
                    placeholder="200자 내외로 입력해주세요"
                    onChange={(e) => setContent(e.target.value)}
                  /> */}
                  <textarea
                    className={styles.reviewTextarea}
                    id="content"
                    value={content}
                    cols="150"
                    maxlength="300"
                    placeholder="300자 내외로 입력해주세요"
                    font-size="large"
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </label>
              </div>
              <div className={styles.buttonContainer}>
                {/* <Button type="submit" variant="primary"> */}
                <Button
                  type="submit"
                  variant="primary"
                  style={{ backgroundColor: "black" }}
                >
                  {type === "add" ? "등록하기" : "수정하기"}
                </Button>
                <Button
                  variant="secondary"
                  style={{ backgroundColor: "black" }}
                  onClick={() => setModalOpen(false)}
                >
                  취소
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
