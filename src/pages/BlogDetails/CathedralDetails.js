import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const CathedralDetails = () => {
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/St_Aloysius_Church%2C_Glasgow_03.jpg/800px-St_Aloysius_Church%2C_Glasgow_03.jpg"
              className="card-img"
              style={{ maxWidth: '100%', height: 'auto' }} // Adjust image styles here
            />
            <Card.Body>
              <Card.Title>St. Aloysius Church</Card.Title>
              <Card.Text>Visit the beautiful architecture and serene atmosphere.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h3>Reviews:</h3>
          <p>
            - Must visit place in Mangaluru. The paintings inside the chapel are beautiful and worth a visit. There is a small museum opposite to the chapel which also worth visiting.
            <br />
            Date of experience: December 2019
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

export default CathedralDetails;
