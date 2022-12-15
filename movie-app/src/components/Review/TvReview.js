import tmdbAPI from "../../tmdbAPI";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import "./scss/Review.scss";
import AOS from "aos";
import Card from "react-bootstrap/Card";
import RatingView from "./RatingView";

function TvReview() {
  const TvID = useParams().id;
  console.log("check id : " + TvID);
  const [load, setLoad] = useState(null);
  const [tvReview, setTvReview] = useState([]); // 가져올 영화 담을 배열
  const [page, setPage] = useState(1); // axios param전달해줄 페이지

  const getTvReview = async () => {
    setLoad(true); // 로딩 시작
    const res = await tmdbAPI.get(`tv/${TvID}/reviews?`, {
      params: { language: "*", page: `${page}` }, //추가한것
    });

    if (res.data) {
      setTvReview(res.data.results);
    } else {
      console.log("error");
    }
    setLoad(false); // 로딩 종료
  };

  useEffect(() => {
    getTvReview();
    AOS.init();
  }, []);

  return (
    <div className="Review-container">
      <div className="Review-title">
        <Card className="ReviewTitleCard">
          <Card.Body className="CardBody">
            <p>해외 평론 및 리뷰</p>
          </Card.Body>
        </Card>
      </div>
      {tvReview
        .slice(0)
        .reverse()
        .map((tvReview, i) => {
          return (
            <>
              <div className="Review-box">
                <Alert
                  variant="light"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <Alert.Heading className="wantFlex">
                    &nbsp; {tvReview.author} &nbsp;&nbsp;
                    <RatingView
                      rate={tvReview.author_details.rating / 2}
                    ></RatingView>
                  </Alert.Heading>
                  <p>{tvReview.content}</p>
                  <hr />
                  <p className="mb-0">&nbsp;작성일 : {tvReview.created_at}</p>
                </Alert>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default TvReview;
