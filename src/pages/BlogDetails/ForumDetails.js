import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ForumDetails = () => {
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
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/0b/55/30/mall-exterior-shot.jpg?w=1200&h=-1&s=1"
              className="card-img"
              style={{ maxWidth: '100%', height: 'auto' }} // Adjust image styles here
            />
            <Card.Body>
              <Card.Title>Forum Fiza Mall</Card.Title>
              <Card.Text>Experience the vibrant shopping culture at Forum Fiza Mall.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h3>Reviews:</h3>
          <p>
            - I like shopping and so off I went to this mall, which I was at walking distance of 10 minutes from my hotel Vivanta. I shopped for discounted clothes and shoes and got good bargains. The mall is not very crowded. I also got some foot massage in the massage chair.
            <br />
            Date of experience: February 2023
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

export default ForumDetails;
