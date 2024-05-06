import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-6xl mb-4 text-white font-bold">Congo Film Store</h1>
      <p className="text-2xl mb-4 text-white">Please login to continue</p>
      
      <input 
        type="text" 
        placeholder="Username" 
        className="py-2 px-4 mb-2 bg-white rounded shadow text-black"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="py-2 px-4 mb-2 bg-white rounded shadow text-black"
      />

      {/* Button to navigate to the films screen */}
      <Link to="/films">
        <button className="bg-white hover:bg-gray-100 text-blue-500 font-semibold py-2 px-4 border border-blue-500 hover:border-blue-300 rounded shadow">Login</button>
      </Link>
    </div>
  );
};

export default Home;