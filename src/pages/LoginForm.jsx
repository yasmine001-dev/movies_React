import React,{useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Profile from '../components/Profile';
import { Link } from 'react-router-dom';


function LoginForm() {
    const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("useEffect in Login component called");
  }, []);
  const handleSubmit = (e) => {
  e.preventDefault(); // يمنع الريفريش
  setShow(true);
};
  return (
    <StyledFormWrapper>
      <Form onSubmit={handleSubmit}>
        <h3 className="text-center mb-4 form-title">Welcome Back</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted-custom">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button className="custom-submit-btn" type="submit"  onClick={() => setShow(true)}>
          Sign In
        </Button>
                {show && <Profile setShow={setShow} show={show} />}
                <div className="text-center mt-3">
  <span style={{ color: "#999" }}>Don't have an account? </span>
  <Link to="/register" className="register-link">
    Register
  </Link>
</div>

      </Form>
    </StyledFormWrapper>
  );
}

const StyledFormWrapper = styled.div`
  background-color: #1c1c1c; 
  padding: 40px;
  border-radius: 12px;
  max-width: 450px;
  margin: 50px auto; 
  color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);

  .form-title {
    color: #ffc107; 
    font-weight: 700;
  }

  .form-label {
    font-weight: 500;
    color: #eaeaea;
    font-size: 14px;
  }

  .form-control {
    background-color: #2b2b2b;
    border: 1px solid #444;
    color: white;
    padding: 10px 15px;
  }

  .form-control:focus {
    background-color: #2b2b2b;
    color: white;
    border-color: #ffc107; 
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);
  }

  .form-control::placeholder {
    color: #888;
  }

  .text-muted-custom {
    color: #999 !important;
    font-size: 12px;
  }

  .form-check-input:checked {
    background-color: #ffc107;
    border-color: #ffc107;
  }
  .form-check-input:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);
  }

  .custom-submit-btn {
    width: 100%;
    margin-top: 15px;
    background-color: transparent;
    color: #ffc107;
    border: 2px solid #ffc107;
    border-radius: 50px; 
    padding: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
  }

  .custom-submit-btn:hover {
    background-color: #ffc107;
    color: #121212;
    border-color: #ffc107;
  }
`;

export default LoginForm;