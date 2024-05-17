import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Home = ({ cities }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search') || '';
  const filteredCities = cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <Container>
    <h1>Cities</h1>
      <Row>
        {filteredCities.map(city => (
          <Col key={city.id} sm={10} md={6} lg={3} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Button onClick={() => navigate(`/city/${city.id}`)} variant="secondary">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
