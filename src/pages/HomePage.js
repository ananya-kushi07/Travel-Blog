import React from 'react';
import { Container, Row, Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the custom CSS file for homepage styling

const HomePage = () => {
  return (
    <Container className="homepage-container p-5 mb-4 bg-light rounded-3">
      <h1>Welcome to Namma Kudla</h1>

      {/* Search Bar */}
      <div className="search-bar-container mt-3 mb-4">
        <InputGroup>
          <FormControl
            placeholder="Search here..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>

      <img
        src="https://media1.thrillophilia.com/filestore/hbyesuouzbriov3uucdicj3vmxiq_img-2.jpg?w=753&h=450&dpr=1.0"
        alt="Namma Kudla"
        className="img-fluid mb-4 homepage-image"
      />

      <p>
        Welcome to Mangalore, also known as Kudla. Mangalore is a vibrant city located on the
        southwest coast of India, known for its rich cultural heritage, stunning beaches, and
        delicious cuisine. Whether you're looking to explore historic temples, relax on sandy
        shores, or enjoy local delicacies, Mangalore has something to offer every traveler.
      </p>

      {/* Popular Blogs */}
      <h2 className="mt-5 mb-3">Popular Blogs</h2>
      <Row className="mb-4 popular-blogs">
        <Col md={6}>
          <Card className="mb-4">
            <Link to="/blog/kadri">
              <Card.Img
                variant="top"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/70/5d/7a/kadri-manjunath-temple.jpg?w=1200&h=-1&s=1"
              />
            </Link>
            <Card.Body>
              <Card.Title>Kadri Manjunatha Temple</Card.Title>
              <Card.Text>
                Kadri Manjunatha is one of the ancient temples, which belongs to the Vijayanagara
                style of structure. This temple is located just 4 km from the heart of the Mangalore
                city.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Link to="/blog/cathedral">
              <Card.Img
                variant="top"
                src="https://mangaloretourism.in/images/places-to-visit/header/st-aloysius-chapel-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg"
              />
            </Link>
            <Card.Body>
              <Card.Title>St. Aloysius Chapel</Card.Title>
              <Card.Text>
                The St. Aloysius Chapel in Mangalore was built by Jesuit Missionaries in 1880 and
                its interiors painted by the Italian Jesuit Antonio Moscheni in 1899, during the
                Mangalore Mission in 1878.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Blogs */}
      <h2 className="mb-3">Recent Blogs</h2>
      <Row className="mb-4 recent-blogs">
        <Col md={3}>
          <Card className="mb-4">
            <Link to="/blog/pilikula">
              <Card.Img
                variant="top"
                src="https://th-i.thgim.com/public/migration_catalog/article11466977.ece/alternates/FREE_1200/14MN_PILIKULA"
              />
            </Link>
            <Card.Body>
              <Card.Title>Pilikula Nisargadhama</Card.Title>
              <Card.Text>
                Pilikula Nisargadhama is a multi-purpose tourist attraction, at Vamanjoor, eastern
                part of Mangalore city in Karnataka.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Link to="/blog/sasihithlu">
              <Card.Img
                variant="top"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/53/4c/e8/this-is-purely-a-bird.jpg?w=1200&h=-1&s=1"
              />
            </Link>
            <Card.Body>
              <Card.Title>Sasihithlu Beach</Card.Title>
              <Card.Text>
                Sasihithlu Beach is situated approximately 6 km to the west of NH 66, and
                surrounded by the backwaters of the Pavanje and Shambhavi rivers. The two rivers
                meet at the beach.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Link to="/blog/sammilan">
              <Card.Img
                variant="top"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/53/16/be/sammilan-shetty-s-butterfly.jpg?w=700&h=-1&s=1"
              />
            </Link>
            <Card.Body>
              <Card.Title>Sammilan Shetty’s Butterfly Park</Card.Title>
              <Card.Text>
                The place being amidst Western Ghats has recorded more than 150 species of
                butterflies, including some of the endemic and most dazzling butterflies of the
                world.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Link to="/blog/forum">
              <Card.Img
                variant="top"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/0b/55/30/mall-exterior-shot.jpg?w=1000&h=-1&s=1"
              />
            </Link>
            <Card.Body>
              <Card.Title>The Forum Fiza Mall</Card.Title>
              <Card.Text>
                Fiza by Nexus is the fifth largest mall in Karnataka, located on Pandeshwar road in
                Mangaluru, 1 km away from the Mangalore Central railway station.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
