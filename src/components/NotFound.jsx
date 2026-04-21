import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default function NotFound() {
  return (
    <>
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#212529',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
    <Container>
        <h1
          style={{
            fontSize: "120px",
            fontWeight: "700",
            color: "#ffc107",
            lineHeight: "1",
            margin: "0",
          }}
        >
          404
        </h1>
          {/* <Button
          as={Link}
          to="/"
          variant="success"
          size="lg"
        >
          ارجع للرئيسية
        </Button> */}
        </Container>
        </div>
    </>
  );
}
