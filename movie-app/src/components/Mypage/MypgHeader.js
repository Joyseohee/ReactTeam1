import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MypgHeader() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar sticky="top" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>
            <div onClick={() => navigate(`/`)}>Brand text</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
