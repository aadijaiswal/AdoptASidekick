import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Adopt.css';

interface Animal {
  id: number;
  name: string;
  photo: string;
  healthStatus: string;
  behavior: string;
}

const Adoption: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [filters, setFilters] = useState({
    species: '',
    size: '',
    location: ''
  });

  useEffect(() => {
    // Fetch animals data from the backend or an API
    axios.get('/api/animals', { params: filters })
      .then((response) => setAnimals(response.data))
      .catch((error) => console.error(error));
  }, [filters]);

  return (
    <div>
      <h1>Adopt a Sidekick</h1>
      <div className="filters">
        <select onChange={(e) => setFilters({ ...filters, species: e.target.value })}>
          <option value="">All Species</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, size: e.target.value })}>
          <option value="">All Sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <input 
          type="text" 
          placeholder="Location" 
          onChange={(e) => setFilters({ ...filters, location: e.target.value })} 
        />
      </div>
      <div className="animals-list">
        {animals.map((animal) => (
          <div key={animal.id} className="animal-card">
            <img src={animal.photo} alt={animal.name} />
            <h2>{animal.name}</h2>
            <p>{animal.healthStatus}</p>
            <p>{animal.behavior}</p>
            <button>Contact Shelter</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adoption;
