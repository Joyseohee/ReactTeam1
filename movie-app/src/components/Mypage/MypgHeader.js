import { Container, Navbar } from "react-bootstrap";

export default function MypgHeader(movie, setMovie, like, setLike) {
  return (
    <>
      <Navbar sticky="top" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
