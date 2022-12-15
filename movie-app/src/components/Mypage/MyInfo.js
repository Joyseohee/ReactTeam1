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
    </>
  );
}
