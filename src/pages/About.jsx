import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

function About() {
  return (
    <AboutWrapper>
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h1 className="main-title">
              About <span>AraCima</span>
            </h1>
            <p className="subtitle">Your ultimate destination for endless entertainment.</p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5 mt-4">
          <Col md={6} className="mb-4 mb-md-0">
            <h3 className="section-title">Who We Are</h3>
            <p className="text-content">
              AraCima is a premium streaming platform offering a vast library of the latest movies, trending TV shows, and exclusive originals. We bring the cinematic experience directly to your screen with stunning high-definition quality.
            </p>
            <p className="text-content">
              Whether you are a fan of action, romance, sci-fi, or documentaries, our carefully curated collections ensure there is something for everyone. Sit back, relax, and grab your popcorn!
            </p>
          </Col>
          
          <Col md={6}>
            <div className="art-box">
              <h3>🎬 Experience The Magic</h3>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 text-center g-4">
          <Col md={4}>
            <div className="feature-card">
              <h4 className="feature-title">✨ 4K Resolution</h4>
              <p className="feature-desc">Enjoy your favorite content in crystal-clear quality with no compromises.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card">
              <h4 className="feature-title">📱 Cross-Platform</h4>
              <p className="feature-desc">Watch seamlessly on your TV, laptop, tablet, or smartphone.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card">
              <h4 className="feature-title">🚀 No Interruptions</h4>
              <p className="feature-desc">A premium, ad-free experience designed for your uninterrupted joy.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  padding: 80px 0;
  background-color: transparent; /* #121212 */
  color: white;

  .main-title {
    font-size: 3rem;
    font-weight: 800;
    color: #eaeaea;
    margin-bottom: 10px;

    span {
      color: #ffc107; 
    }
  }

  .subtitle {
    font-size: 1.1rem;
    color: #888;
    letter-spacing: 1px;
  }

  .section-title {
    color: #ffc107;
    font-weight: 700;
    margin-bottom: 20px;
    display: inline-block;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
  }

  .text-content {
    color: #ccc;
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  .art-box {
    background: linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 100%);
    height: 100%;
    min-height: 280px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    
    h3 {
      color: #ffc107;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }

  .feature-card {
    background-color: #1c1c1c; 
    padding: 35px 20px;
    border-radius: 12px;
    height: 100%;
    border: 1px solid #2b2b2b;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-10px);
      border-color: #ffc107;
      box-shadow: 0 10px 25px rgba(255, 193, 7, 0.15);
    }
  }

  .feature-title {
    color: #eaeaea;
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  .feature-desc {
    color: #888;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }
`;

export default About;