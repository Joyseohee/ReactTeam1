import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccountName from "./AccountName";
import AccountDetail from "./AccountDetail";

export default function MyInfo() {
  return (
    <>
      <Container fluid>
        <Row className="profileWrapper">
          <Col lg={5} className="photoWrapper">
            <div className="photo"></div>
          </Col>
          <Col lg={7} className="Info">
            <Row className="InfoMargin" />
            <Row className="accountName">
              <AccountName />
            </Row>
            <div className="DetailMargin btline" />
            <div className="DetailMargin" />
            <Row className="accountDetail">
              <AccountDetail />
            </Row>
          </Col>
        </Row>
      </Container>

      {/* <div className="MyInfo profile container-fluid text-center">
        <div className="profileWrapper row">
          <div className="photoWrapper col-4">
            <div className="photo"></div>
          </div>
          <div className="Info col">
            <div className="accountName row">
              <AccountName />
            </div>
            <div className="accountDetail row">
              영화를 사랑하는 영화광입니다!
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
