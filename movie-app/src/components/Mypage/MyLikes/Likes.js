import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Movie from "../../Common/Movie";
import AOS from "aos";
import "aos/dist/aos.css";
import NoMovie from "./NoMovie";

export default function Likes() {
  let [recentId, setRecentId] = useState([]);
  // let recentId = useRef([]);
  let [noMovie, setNoMovie] = useState(true);

  useEffect(() => {
    let arr = localStorage.getItem("likestore");
    arr = JSON.parse(arr);
    arr = new Set(arr);
    arr = [...arr];
    setRecentId(arr);
    console.log(noMovie);
    AOS.init();
  }, [recentId[0], noMovie]);

  // const display() = () => {

  // }

  return (
    <>
      <Container>
        {" "}
        <Row
          xs={1}
          md={2}
          lg={3}
          className="row justify-content-start gy-5 gx-0"
        >
          {recentId == null
            ? null
            : recentId.map((LikesId) => {
                return (
                  <Col>
                    <div
                      data-aos="fade-in"
                      data-aos-offset="100"
                      // data-aos-delay="500"
                      data-aos-duration="800"
                      data-aos-easing="ease-in-out"
                      className="likeMovieCard"
                    >
                      <Movie
                        id={LikesId}
                        key={LikesId}
                        width="300"
                        style="MyLikes"
                      />
                    </div>
                  </Col>
                );
              })}
        </Row>
      </Container>
      {noMovie && <NoMovie />}
    </>
  );
}
