import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import City from './components/City';
import CityFeature from './components/CityFeature';

const cities = [
  {
    "id": 1,
    "name": "San Francisco",
    "features": [
      { "id": 1, "name": "Golden Gate Bridge", "description": "A famous suspension bridge." },
      { "id": 2, "name": "Alcatraz Island", "description": "A historic island prison." },
      { "id": 3, "name": "Fisherman's Wharf", "description": "A popular tourist area." }
    ]
  },
  {
    "id": 5,
    "name": "Miami",
    "features": [
      { "id": 1, "name": "South Beach", "description": "A famous beach." },
      { "id": 2, "name": "Art Deco Historic District", "description": "A historic area known for its architecture." },
      { "id": 3, "name": "Vizcaya Museum and Gardens", "description": "A historic estate." }
    ]
  },
  {
    "id": 3,
    "name": "Chicago",
    "features": [
      { "id": 1, "name": "Willis Tower", "description": "A famous skyscraper." },
      { "id": 2, "name": "Navy Pier", "description": "A popular entertainment area." },
      { "id": 3, "name": "Millennium Park", "description": "A famous public park." }
    ]
  },
  {
    "id": 6,
    "name": "Seattle",
    "features": [
      { "id": 1, "name": "Space Needle", "description": "A famous observation tower." },
      { "id": 2, "name": "Pike Place Market", "description": "A popular public market." },
      { "id": 3, "name": "Chihuly Garden and Glass", "description": "A museum showcasing glass artwork." }
    ]
  }
  
  
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
