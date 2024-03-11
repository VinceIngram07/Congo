import React, { useState, useEffect } from 'react';

const ProductListing = () => {
  // Example state for product data (replace with actual data retrieval logic)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your backend or API
    // Example: fetch('/api/products').then(response => response.json()).then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product Listings</h2>
      <ul>
        {products.map(product => (
          <li key={product.product_id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            {/* Add to Cart button (implement logic to add product to cart) */}
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListing;
