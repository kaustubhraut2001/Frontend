import React, { useState } from 'react';
import NAvigationbar from './NAvigationbar';

const AddReview = () => {
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState('');
  const [reviews , setReviews] = useState([])
  const handleAddReview = () => {
    const newReview = {
      rating,
      description,
    };
    console.log('Added Review:', newReview);
    setReviews([...reviews, newReview])

  };

  return (
    <div >

      <NAvigationbar/>
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <button
        onClick={handleAddReview}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Review
      </button>
      <h3 className="text-xl font-bold mt-4 mb-2">Reviews</h3>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-2 rounded shadow-md">
          <p className="font-bold">{review.rating}/5</p>
          <p>{review.description}</p>
        </div>
      ))}

    </div>
    </div>
  );
};

export default AddReview;