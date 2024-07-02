import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const PilikulaDetails = () => {
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
              src="https://content.jdmagicbox.com/comp/mangalore/t6/0824px824.x824.180119140344.g3t6/catalogue/pilikula-regional-science-center-moodushedde-mangalore-parks-1n5vpp9z01.jpg"
              className="card-img"
              style={{ maxWidth: '100%', height: 'auto' }} // Adjust image styles here
            />
            <Card.Body>
              <Card.Title>Pilikula Biological Park</Card.Title>
              <Card.Text>Discover the exotic animals and birds at Pilikula Biological Park.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h3>Reviews:</h3>
          <p>
            - This is a full day activity and in case if you visit this place for only half day or few hours then you will be able to see 2 or 3 things only. We had around 3 hours of time hence had to choose 2 activity. We opted for Zoo visit and Arts and Gutthu house visit. Zoo was maintained well, as the animals were looking healthy compared to few other zoo in other cities were animals look malnutritioned. This place is in outskirts of Mangalore but not very far though. Just a drive of 20 minutes will take you there. Need to buy tickets for each activity or can buy one ticket for all the activities. It is better if you purchase a buggy ticket for travelling between attractions otherwise you will have to walk between attractions and might lose your time just for that.
            <br />
            Date of experience: January 2021
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

export default PilikulaDetails;
