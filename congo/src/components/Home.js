// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Congo Film Store</h1>
      <p className="text-2xl mb-4">Explore our products and find amazing deals!</p>
      
      {/* Button to navigate to the category screen */}
      <Link to="/categories">
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >View Categories</button>
      </Link>
      <Link to="/films">
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">View All Films</button>
      </Link>
    </div>
  );
};

export default Home;