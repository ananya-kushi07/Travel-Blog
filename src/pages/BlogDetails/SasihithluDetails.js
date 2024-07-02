import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const SasihithluDetails = () => {
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
              src="https://lh5.googleusercontent.com/p/AF1QipNRw4bVz2N7CR3iCZf2q1RDcieGiknuqLzuAMCd=s800"
              className="card-img"
              style={{ maxWidth: '100%', height: 'auto' }} // Adjust image styles here
            />
            <Card.Body>
              <Card.Title>Sasihithlu Beach</Card.Title>
              <Card.Text>Relax at the serene beaches of Sasihithlu.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h3>Reviews:</h3>
          <p>
            - This is one of the most beautiful beach of Mangalore. You can spend quality time here. You can see here merger of sea and river. You will not get any food items here so need to carry for the kids. Great feeling.
            <br />
            Date of experience: March 2020
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

export default SasihithluDetails;
