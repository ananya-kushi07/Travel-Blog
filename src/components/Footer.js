import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import custom CSS for the footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light mt-auto">
      <Container>
        <Row>
          <Col className="text-center mb-2">
            <p>&copy; 2024 Namma Kudla. All rights reserved.</p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-2">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/" className="footer-link">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about" className="footer-link">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" className="footer-link">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/privacy" className="footer-link">Privacy Policy</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row className="justify-content-center">
          <Nav>
            <Nav.Item>
              <Nav.Link href="https://www.facebook.com" className="social-link">
                <FaFacebook />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.twitter.com" className="social-link">
                <FaTwitter />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.instagram.com" className="social-link">
                <FaInstagram />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
