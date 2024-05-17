import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const CityFeature = ({ cities }) => {
  const { cityId, featureId } = useParams();
  const city = cities.find(c => c.id === parseInt(cityId));
  const feature = city.features.find(f => f.id === parseInt(featureId));

  if (!city || !feature) {
    return <div>Feature not found</div>;
  }

  return (
    <Container>
      <h1>{feature.name}</h1>
      <p>{feature.description}</p>
    </Container>
  );
};

export default CityFeature;
