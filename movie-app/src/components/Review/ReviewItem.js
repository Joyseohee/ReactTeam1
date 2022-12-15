import { motion } from "framer-motion";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../store";
import styles from "./scss/ItemReview.module.scss";
import CheckButton from "./CheckButton";
import Rating from "./Rating";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RatingView from "./RatingView";

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

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(deleteReview({ ...review }));
  };

  return (
    <>
      {id.id === review.movie_id ? ( // 조건부 (원하는 )
        <div className="review-test" data-aos="fade-down">
          <Alert variant="light">
            <Alert.Heading className="wantFlex">
              <motion.div className={styles.item} variants={child}>
                <div className={styles.todoDetails}>
                  <CheckButton checked={checked} handleCheck={handleCheck} />
                  <Container>
                    <Row>
                      <Col>
                        {review.authorNick}
                        <p></p>
                      </Col>
                      {/* <Col>
                        <Rating
                          // setRate={setRate}
                          rate={review.rate}
                        />
                      </Col> */}
                    </Row>
                    <Row>
                      <Col>
                        <RatingView rate={review.rate}></RatingView>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>{review.content}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <hr />
                        <p>{review.date}</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </motion.div>
            </Alert.Heading>
          </Alert>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ReviewItem;
