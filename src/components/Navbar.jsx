import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
function NavbarEl() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Container fluid className="text-warning text-left">
        <h2>AraCima</h2>
      </Container>
          {/* <Navbar.Brand href="#home">AraCima</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}
export default NavbarEl;
