import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/Footer.module.css";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto" data-bs-theme="dark">
      <Container>
        <Row className="mb-3">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="text-warning">AraCima</h5>
            <p className="text-secondary small mb-0">
              Your go-to destination for movies and entertainment.
            </p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h6 className="text-white">Quick Links</h6>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-secondary p-0 py-1">Home</Nav.Link>
              <Nav.Link href="#features" className="text-secondary p-0 py-1">Movies</Nav.Link>
            </Nav>
          </Col>

          <Col md={4}>
            <h6 className="text-white">Contact</h6>
            <p className="text-secondary small mb-1">support@aracima.com</p>
            <p className="text-secondary small mb-0">© 2025 AraCima. All rights reserved.</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <p className="text-center text-secondary small mb-0">
          Made with ♥ by AraCima Team
        </p>
      </Container>
    </footer>
  );
}

export default Footer;