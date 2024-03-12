import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Film = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [films, setFilms] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);

        // Fetch films for the default category
        if (response.data.length > 0) {
          const defaultCategory = response.data[0][1];
          setSelectedCategory(defaultCategory);
          const filmsResponse = await axios.get(`http://localhost:5000/films?category=${defaultCategory}`);
          setFilms(filmsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await axios.get(`http://localhost:5000/films?category=${category}`);
      setFilms(response.data);
    } catch (error) {
      console.error('Error fetching films:', error);
    }
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

      {/* Dropdown menu for categories */}
      <label htmlFor="category" className="mr-2">Select Category:</label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="p-2 border border-gray-400 rounded"
      >
        {categories.map((category) => (
          <option key={category[0]} value={category[1]}>
            {category[1]}
          </option>
        ))}
      </select>

      {/* Display films based on the selected category */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {showCart ? (
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
            <ul className="mt-4">
              {cart.map((cartItem) => (
                <li key={cartItem[0]} className="flex items-center justify-between border border-gray-300 rounded p-2 mb-2">
                  <div>
                    <span className="font-semibold">{cartItem[1]}</span> - {cartItem[2]}
                  </div>
                  <button onClick={() => removeFromCart(cartItem[0])} className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          films.map((film) => (
            <div key={film[0]} className="border border-gray-300 rounded p-4">
              <div className="text-xl font-semibold mb-2">{film[1]}</div>
              <div className="text-sm text-gray-600">{film[2]}</div>
              <button onClick={() => addToCart(film)} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Shopping cart button at the bottom */}
      <button onClick={() => setShowCart(!showCart)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
        {showCart ? 'View Films' : 'View Shopping Cart'}
      </button>
    </div>
  );
};

export default Film;
