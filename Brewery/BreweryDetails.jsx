import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NAvigationbar from './NAvigationbar';

const BreweryDetails = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response) => {
        setBrewery(response.data);
      })
      .catch((error) => {
        console.error('Error fetching brewery details:', error);
      });
  }, [id]);

  return (
    <div>
      <NAvigationbar/>
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Brewery Details</h2>
      {brewery && (
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold">{brewery.name}</h3>
          <p className="text-gray-600">Address: {brewery.street}, {brewery.city}, {brewery.state}</p>
          <p className="text-gray-600">Phone: {brewery.phone}</p>
          {brewery.website_url && (
            <p className="text-blue-500 hover:underline"><a href={brewery.website_url}>Website</a></p>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default BreweryDetails;