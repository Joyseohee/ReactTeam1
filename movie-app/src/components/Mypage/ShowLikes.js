import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Movie from "../Common/Movie";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ShowLikes() {
  let [recentId, setRecentId] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("likestore");
    arr = JSON.parse(arr);
    arr = new Set(arr);
    arr = [...arr];
    setRecentId(arr);
    AOS.init();
  });

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="row justify-content-start gy-5 gx-0">
        {recentId === null
          ? null
          : recentId.map((LikesId) => {
              return (
                <div
                  data-aos="fade-in"
                  data-aos-offset="100"
                  data-aos-delay="10"
                  data-aos-duration="100"
                  data-aos-easing="ease-in-out"
                  className="likeMovieCard"
                >
                  <Movie id={LikesId} />
                </div>
              );
            })}
      </Row>
    </Container>
  );
}
