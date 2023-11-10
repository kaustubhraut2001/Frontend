import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NAvigationbar from './NAvigationbar';

const BrewerySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_name=${searchTerm}`)
      .then((response) => {
        setBreweries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching breweries:', error);
      });
  }, [searchTerm]);

  return (
    <div>
      <NAvigationbar/>
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Brewery Search</h2>
      <input
        type="text"
        placeholder="Search by brewery name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id} className="mb-2">
            <Link
              to={`/brewery/${brewery.id}`}
              className="text-blue-500 hover:underline"
            >
              {brewery.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default BrewerySearch;