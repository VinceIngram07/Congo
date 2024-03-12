// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Film = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/film');
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Films</h1>
//       <ul>
//         {categories.map((category) => (
//           <li key={category[0]}>
//             {category[0]} - {category[1]} - {category[2]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Film;
// Film.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Film = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [films, setFilms] = useState([]);

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

  return (
    <div>
      <h1>Films</h1>

      {/* Dropdown menu for categories */}
      <label htmlFor="category">Select Category:</label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category[0]} value={category[1]}>
            {category[1]}
          </option>
        ))}
      </select>

      {/* Display films based on the selected category */}
      <ul>
        {films.map((film) => (
          <li key={film[0]}>
            {film[0]} - {film[1]} - {film[2]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Film;
