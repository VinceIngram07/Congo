import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BeatLoader } from "react-spinners";
// import category1Image from './IMG/Lajonard-Movie-Folder-Comedy.256.png';

const Film = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [films, setFilms] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  
  
  // Calculate the films for the current page
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);
  
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);
  
        // Fetch films for the default category
        if (response.data.length > 0) {
          const defaultCategory = response.data[0][1];
          handleCategoryChange(defaultCategory);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleCategoryChange = async (category) => {
    setLoading(true);
    const response = await fetch(`http://localhost:5000/films?category=${category}`);
    const data = await response.json();
    setFilms(data);
    setLoading(false);
  };

  const addToCart = (film) => {
    setCart([...cart, film]);
  };

  const removeFromCart = (filmId) => {
    setCart(cart.filter(item => item[0] !== filmId));
  };

  return (
    <div className="p-8">
      {/* Shopping cart button on top */}
      <button onClick={() => setShowCart(!showCart)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
        {showCart ? 'View Films' : 'View Shopping Cart'}
      </button>
  
      <h1 className="text-3xl mb-4">Films</h1>
  
      {/* Grid for categories */}
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category[0]}
            onClick={() => handleCategoryChange(category[1])}
            className="border border-gray-300 bg-blue-500 text-white hover:bg-blue-700 transition rounded p-4 cursor-pointer"
          >
            {category[1]}
          </div>
        ))}
      </div>
  
      {/* Display loading spinner or films based on the loading state */}
      {loading ? (
        <div className="flex justify-center items-center">
          <BeatLoader color={"#123abc"} loading={loading} size={15} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-8">
          {currentFilms.map((film) => (
            <div key={film.film_id} className="border border-gray-300 rounded p-4">
              <h2 className="text-xl font-bold">{film.title}</h2>
              <p>{film.description}</p>
              {/* Add more film details here */}
              <button 
                onClick={() => setSelectedFilm(film)} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Film
              </button>
              <button 
                onClick={() => addToCart(film)} 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
  
      {/* Pagination */}
      <div className="mt-4">
        {[...Array(Math.ceil(films.length / filmsPerPage))].map((e, i) => (
          <button 
            key={i} 
            onClick={() => paginate(i + 1)} 
            className={`mx-2 py-2 px-4 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'} hover:bg-blue-700 transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>
  
      {/* Shopping cart button at the bottom */}
      <button onClick={() => setShowCart(!showCart)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8">
        {showCart ? 'View Films' : 'View Shopping Cart'}
      </button>
    </div>
  );

};

export default Film;

// Path: congo/src/components/Film.js