import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BrewerySearch from '../Brewery/BrewerySearch';
import BreweryDetails from '../Brewery/BreweryDetails';
import AddReview from '../Brewery/Review';
import Signup from '../Component/Signup';
import Login from '../Component/Login';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/brewery/search" element={<BrewerySearch />} />
        <Route path="/brewery/:id" element={<BreweryDetails />} />
        <Route path="/add-review/:id" element={<AddReview />} />
      </Routes>
    </Router>
  );
}


export default App;