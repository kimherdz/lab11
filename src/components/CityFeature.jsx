import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const CityFeature = ({ cities }) => {
  const { cityId, featureId } = useParams();
  const city = cities.find(c => c.id === parseInt(cityId));
  const feature = city.features.find(f => f.id === parseInt(featureId));

  return (
    <Container>
      <h1>{feature.name}</h1>
      <h5>{feature.description}</h5>
    </Container>
  );
};

export default CityFeature;
