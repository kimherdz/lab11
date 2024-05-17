import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import City from './components/City';
import CityFeature from './components/CityFeature';

const cities = [
  {
    id: 1,
    name: 'New York',
    features: [
      { id: 1, name: 'Statue of Liberty', description: 'A famous landmark.' },
      { id: 2, name: 'Central Park', description: 'A large public park.' },
    ],
  },
  {
    id: 2,
    name: 'Los Angeles',
    features: [
      { id: 1, name: 'Hollywood Sign', description: 'An iconic landmark.' },
      { id: 2, name: 'Venice Beach', description: 'A popular beach.' },
    ],
  },
];

const App = () => {
  return (
    <Router>
      <CustomNavbar cities={cities} />
      <Routes>
        <Route path="/" element={<Home cities={cities} />} />
        <Route path="/city/:cityId" element={<City cities={cities} />} />
        <Route path="/city/:cityId/feature/:featureId" element={<CityFeature cities={cities} />} />
      </Routes>
    </Router>
  );
};

export default App;
