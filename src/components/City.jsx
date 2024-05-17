import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Col, Container } from 'react-bootstrap';

const City = ({ cities }) => {
  const { cityId } = useParams();
  const city = cities.find((city) => city.id === parseInt(cityId));

  return (
    <Container>
      <h1>{city.name}</h1>
        <Col sm={5} md={5} lg={5} className="mb-3">
            <Card>
                <Card.Body>
                <Card.Title>Features:</Card.Title>
                {city.features.map((feature, index) => (
                <Link key={index} to={`feature/${feature.id}`} className="btn btn-secondary m-2">
                {feature.name}
                </Link>
            ))}
                </Card.Body>
            </Card>
        </Col>
    </Container>
  );
};

export default City;