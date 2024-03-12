// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Your Online Store</h1>
      <p>Explore our products and find amazing deals!</p>
      
      {/* Button to navigate to the category screen */}
      <Link to="/categories">
        <button>View Categories</button>
      </Link>
      <Link to="/films">
        <button>View All Films</button>
      </Link>
    </div>
  );
};

export default Home;