import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tmdbAPI from "../../tmdbAPI";

export default function MyReviewDetail({ show, setShow, review }) {
  let [movieTitle, setMovieTitle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    tmdbAPI.get(`movie/${review.movie_id}`).then((res) => {
      setMovieTitle(res.data.title);
    });
    console.log(show);
  }, [show]);

  useEffect(() => {
    console.log(show);
  }, [show]);
  const handleClose = () => setShow(false);

  return (
    <>
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{movieTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{review.content}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
