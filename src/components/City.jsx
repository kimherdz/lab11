import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const City = ({ cities }) => {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const city = cities.find(c => c.id === parseInt(cityId));

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <Container>
      <h1>{city.name}</h1>
      <h2>Features</h2>
      {city.features.map((feature, index) => (
        <Button key={index} onClick={() => navigate(`feature/${feature.id}`)} variant="secondary" className="m-2">
          {feature.name}
        </Button>
      ))}
    </Container>
  );
};

export default City;
