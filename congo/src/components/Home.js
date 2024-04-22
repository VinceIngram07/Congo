// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-6xl mb-4 text-white font-bold">Congo Film Store</h1>
      <p className="text-2xl mb-4 text-white">Explore our products and find amazing deals!</p>
      
      {/* Button to navigate to the category screen */}
      <Link to="/categories">
        <button className="bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-4 border border-blue-500 hover:border-blue-300 rounded shadow mb-2">View Categories</button>
      </Link>
      <Link to="/films">
        <button className="bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-4 border border-blue-500 hover:border-blue-300 rounded shadow">View All Films</button>
      </Link>
    </div>
  );
};

export default Home;