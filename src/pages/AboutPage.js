import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutPage.css'; // Import the custom CSS file for AboutPage

const AboutPage = () => {
  return (
    <Container className="p-5 mb-4 bg-light rounded-3 about-container">
      <h1 className="text-center mb-5">About Us</h1>
      <p className="about-text">
        Welcome to Namma Kudla, your go-to travel blog for everything related to Kudla. Our mission is to provide travelers with the best tips, guides, and stories to make their visit to Kudla unforgettable.
      </p>
      <p className="about-text">
        Our team of passionate travelers and local experts share their knowledge and experiences to help you explore the rich cultural heritage, natural beauty, and vibrant attractions of Kudla.
      </p>
      <Row className="mb-4">
        <Col md={6}>
          <div className="feature text-center">
            <img src="https://media1.thrillophilia.com/filestore/listing_page_heart_icon.png?w=100&dpr=1.3" alt="Curated with love" className="feature-image" />
            <p><strong>Curated with love</strong></p>
            <p>Expert-guided trips with meticulous planning.</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="feature text-center">
            <img src="https://media1.thrillophilia.com/filestore/listing_page_24_7_icon.png?w=100&dpr=1.3" alt="24/7 Support" className="feature-image" />
            <p><strong>24/7 Support</strong></p>
            <p>We are always there to help you pre, post, and on the trip.</p>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <div className="feature text-center">
            <img src="https://media1.thrillophilia.com/filestore/listing_page_message_icon.png?w=100&dpr=1.3" alt="Ratings" className="feature-image" />
            <p><strong>4.6 / 5.0</strong></p>
            <p>Cumulative ratings of our trips across platforms.</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="feature text-center">
            <img src="https://media1.thrillophilia.com/filestore/listing_page_heart_ballon_icon.png?w=100&dpr=1.3" alt="Another Feature" className="feature-image" />
            <p><strong>10 k+</strong></p>
            <p>Happy customers from all the regions.</p>
          </div>
        </Col>
      </Row>
      <p className="about-text">
        We strive to create content that inspires, informs, and empowers travelers to make the most of their journey to Kudla. Whether you're planning your first visit or returning to explore more, Namma Kudla is here to guide you every step of the way.
      </p>
    </Container>
  );
};

export default AboutPage;
