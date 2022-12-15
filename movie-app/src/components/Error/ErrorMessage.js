import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function ErrorMessage() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col>
            <div className="ErrorMessage">
              <p>
                요청하신 url{" "}
                <span className="url">'localhost:8080{location.pathname}'</span>
                은 없는 url입니다.
              </p>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </>
  );
}
