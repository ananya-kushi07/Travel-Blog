import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const KadriDetails = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <Container className="p-5">
      <Row>
        <Col md={8}>
          <Card className="custom-card mb-3">
            <Card.Img
              variant="top"
              src="https://genuinetaxi.in/wp-content/uploads/2022/05/Kadri-Manjunatheshwara-Temple.jpg"
              className="card-img"
              style={{ maxWidth: '100%', height: 'auto' }} // Adjust image styles here
            />
            <Card.Body>
              <Card.Title>Kadri Manjunath Temple</Card.Title>
              <Card.Text>Explore the spiritual vibes at Kadri Manjunath Temple.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h3>Reviews:</h3>
          <p>
            - On 31st May, myself with my son & parents got to visit Kadri Manjunatha temple from Sri Ramakrishna Mutt, Mangalore.
            Kadri Manjunatha is one of the ancient temples, which belongs to the Vijayanagara style of structure. This temple is located just 4 km from the heart of Mangalore city.
            The temple has various statues of Gokarnatha, Machendranath, Shringinath, Manjushri, Lokeshwara, and even Buddha apart from Lord Manjunatha. We need to climb a few steps, where we can see 7 rivers & can do Abhishegam for the Shiv Lingam placed there.
            Had a blissful evening at the temple !!
            <br />
            Date of experience: May 2023
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <h3>Leave a Comment:</h3>
          <Form onSubmit={handleCommentSubmit}>
            <Form.Group controlId="commentForm.ControlTextarea">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={handleCommentChange}
                placeholder="Write your comment here..."
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <h3>Comments:</h3>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>{comment}</Card.Body>
              </Card>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default KadriDetails;
