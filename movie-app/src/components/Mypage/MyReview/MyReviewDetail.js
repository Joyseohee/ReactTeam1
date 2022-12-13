import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import tmdbAPI from "../../../tmdbAPI";
import toast from "react-hot-toast"; // review 등록, 수정, 삭제시 안내 창
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../store";
import { MdDelete, MdEdit } from "react-icons/md";
import styles from "../../../components/Review/scss/ItemReview.module.scss";
import ReviewModal from "../../../components/Review/ReviewModal";

export default function MyReviewDetail({ show, setShow, review }) {
  let [movieTitle, setMovieTitle] = useState();

  useEffect(() => {
    tmdbAPI.get(`movie/${review.movie_id}`).then((res) => {
      setMovieTitle(res.data.title);
    });
  }, [show]);

  useEffect(() => {}, [show]);
  const handleClose = () => setShow(false);

  // review 기능 (수정, 삭제)
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

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
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{movieTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{review.content}</Modal.Body>
          <Modal.Footer>
            <div
              className={styles.icon}
              onClick={() => handleUpdate()}
              onKeyDown={() => handleUpdate()}
              tabIndex={0}
              role="button"
            >
              <MdEdit />
            </div>
            <div
              className={styles.icon}
              onClick={() => handleDelete()}
              onKeyDown={() => handleDelete()}
              tabIndex={0}
              role="button"
            >
              <MdDelete />
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <ReviewModal
              type="update"
              modalOpen={updateModalOpen}
              setModalOpen={setUpdateModalOpen}
              review={review}
            />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
