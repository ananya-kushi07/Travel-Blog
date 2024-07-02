import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BlogPage = () => {
  return (
    <>
      
      <Container className="p-5">
        <Row>
          <Col md={3}>
            <aside>
              <h3>Categories</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#wildlife">Wildlife</a>
                </li>
                <li>
                  <a href="#beaches-forts">Beaches/Forts</a>
                </li>
              
                <li>
                  <a href="#shopping-mall">Shopping Mall</a>
                </li>
                <li>
                  <a href="#religious-place">Religious Place</a>
                </li>
                <li>
                  <a href="#ice-cream-parlour">Ice Cream Parlour</a>
                </li>
              </ul>
            </aside>
          </Col>
          <Col md={9}>
            <section id="wildlife">
              <h2>Wildlife</h2>
              <Row>
                <Col md={6}>
                  <Card className="custom-card mb-4">
                    <Link to="/blog/pilikula">
                      <Card.Img
                        variant="top"
                        src="https://content.jdmagicbox.com/comp/mangalore/t6/0824px824.x824.180119140344.g3t6/catalogue/pilikula-regional-science-center-moodushedde-mangalore-parks-1n5vpp9z01.jpg"
                        alt="Pilikula Biological Park"
                        className="card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        <Link to="/blog/pilikula">Pilikula Biological Park</Link>
                      </Card.Title>
                      <Card.Text>Discover the exotic animals and birds.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="custom-card mb-4">
                    <Link to="/blog/sammilan">
                      <Card.Img
                        variant="top"
                        src="https://lh5.googleusercontent.com/p/AF1QipPG-WFCRc0aIREpvBE1BQ8qig2E84iVAthT3xRX=w675-h390-n-k-no"
                        alt="Sammilan Shetty's Butterfly Park"
                        className="card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        <Link to="/blog/sammilan">Sammilan Shetty's Butterfly Park</Link>
                      </Card.Title>
                      <Card.Text>Explore the rich wildlife of Kudla.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Add more wildlife posts as needed */}
            </section>

            <section id="beaches-forts">
              <h2>Beaches/Forts</h2>
              <Row>
                <Col md={6}>
                  <Card className="custom-card mb-4">
                    <Link to="/blog/sasihithlu">
                      <Card.Img
                        variant="top"
                        src="https://lh5.googleusercontent.com/p/AF1QipNRw4bVz2N7CR3iCZf2q1RDcieGiknuqLzuAMCd=s800"
                        alt="Sasihithlu Beach"
                        className="card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        <Link to="/blog/sasihithlu">Sasihithlu Beach</Link>
                      </Card.Title>
                      <Card.Text>Relax at the serene beaches of Kudla.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="custom-card mb-4">
                    <Link to="/blog/sulthan">
                      <Card.Img
                        variant="top"
                        src="https://merrytogoaround.com/wp-content/uploads/2013/09/sultan-battery.png"
                        alt="Sulthan Battery"
                        className="card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        <Link to="/blog/sulthan">Sulthan Battery</Link>
                      </Card.Title>
                      <Card.Text>Visit the historical forts.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Add more beaches/forts posts as needed */}
            </section>

            <section id="shopping-mall">
              <h2>Shopping Mall</h2>
              <Card className="custom-card mb-4">
                <Link to="/blog/forum">
                  <Card.Img
                    variant="top"
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/0b/55/30/mall-exterior-shot.jpg?w=1200&h=-1&s=1"
                    alt="Forum Fiza Mall"
                    className="card-img"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>
                    <Link to="/blog/forum">Forum Fiza Mall</Link>
                  </Card.Title>
                  <Card.Text>Experience the vibrant shopping culture.</Card.Text>
                </Card.Body>
              </Card>
              {/* Add more shopping mall posts as needed */}
            </section>

            <section id="religious-place">
              <h2>Religious Place</h2>
              <Row>
                <Col md={4}>
                  <Card className="custom-card mb-4">
                    <Link to="/blog/kadri">
                      <Card.Img
                        variant="top"
                        src="https://genuinetaxi.in/wp-content/uploads/2022/05/Kadri-Manjunatheshwara-Temple.jpg"
                        alt="Kadri Manjunath Temple"
                        className="card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        <Link to="/blog/kadri">Kadri Manjunath Temple</Link>
                      </Card.Title>
                      <Card.Text>Explore the spiritual sites of Kudla.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="custom-card mb-4">
                    <Link to="/blog/cathedral">
                      <Card.Img
                        variant="top"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/St_Aloysius_Church%2C_Glasgow_03.jpg/800px-St_Aloysius_Church%2C_Glasgow_03.jpg"
                        alt="St. Aloysius Chapel"
                        className="card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        <Link to="/blog/cathedral">St. Aloysius Chapel</Link>
                      </Card.Title>
                      <Card.Text>Visit the ancient temples and churches.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="custom-card mb-4">
                    <Link to="/blog/kateel">
                      <Card.Img
                        variant="top"
                        src="https://lightuptemples.com/wp-content/uploads/2022/11/file78yh7bdaa2sxjq8x1mp-1579713813.jpg"
                        alt="Kateel Sri Durga Parameshwari"
                        className="card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        <Link to="/blog/kateel">Kateel Sri Durga Parameshwari</Link>
                      </Card.Title>
                      <Card.Text>Find peace and serenity at these places.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Add more religious place posts as needed */}
            </section>

            <section id="ice-cream-parlour">
              <h2>Ice Cream Parlour</h2>
              <Card className="custom-card mb-4">
                <Link to="/blog/pabbas">
                  <Card.Img
                    variant="top"
                    src="https://lh3.googleusercontent.com/p/AF1QipMtDlWrWUd-W7emXanWzur2ZW6n_aGPUQAaEFXr=s1360-w1360-h10201"
                    alt="Pabbas Icecream Parlour"
                    className="card-img"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>
                    <Link to="/blog/pabbas">Pabbas Icecream Parlour</Link>
                  </Card.Title>
                  <Card.Text>Visit one of the famous Ice cream parlours of Mangalore!</Card.Text>
                </Card.Body>
              </Card>
              {/* Add more ice cream parlour posts as needed */}
            </section>

          </Col>
        </Row>
      </Container>
      {/* Remove the extra Footer here */}
    </>
  );
};

export default BlogPage;

