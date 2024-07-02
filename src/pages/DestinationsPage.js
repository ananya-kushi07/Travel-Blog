import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DestinationsPage = () => {
  const destinations = [
    {
      title: 'Kudroli Gokarnanath Temple',
      image: 'https://media1.thrillophilia.com/filestore/hbyesuouzbriov3uucdicj3vmxiq_img-2.jpg?w=1440&dpr=2',
      text: 'Experience the pristine beaches with golden sands and crystal clear waters.',
      link: '/temple1',
    },
    {
      title: 'Tannirbhavi beach',
      image: 'https://media1.thrillophilia.com/filestore/1tth48njbzvyg46yij093uh2b5a0_1553498696_2.jpg?w=753&h=450&dpr=1.0',
      text: 'Explore the majestic mountains and enjoy thrilling outdoor activities.',
      link: '/beach1',
    },
    {
      title: 'Panambur beach',
      image: 'https://media1.thrillophilia.com/filestore/k98azlcz3ptnhlk23l7ulr5l823f_1553500978_13.jpg?w=1440&dpr=2',
      text: 'Discover the rich cultural heritage and historical landmarks.',
      link: '/beach2',
    },
    {
      title: 'Kukke Subrahmanya Temple',
      image: 'https://media1.thrillophilia.com/filestore/08nmpqygiwxqgt074tz1kqntow8s_1553502961_25.jpg?w=753&h=450&dpr=1.0',
      text: 'Experience the vibrant city life with modern amenities and attractions.',
      link: '/temple2',
    },
  ];

  return (
    <Container>
      <h1 className="my-4">Popular Destinations</h1>
      <Row>
        {destinations.map((destination, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={destination.image} />
              <Card.Body>
                <Card.Title>{destination.title}</Card.Title>
                <Card.Text>{destination.text}</Card.Text>
                <Button variant="primary" as={Link} to={destination.link}>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DestinationsPage;