import React, { useState, useEffect } from 'react';

const Cart = () => {
  // Example state for cart items (replace with actual data retrieval logic)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from your backend or API
    // Example: fetch('/api/cart').then(response => response.json()).then(data => setCartItems(data));
  }, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.item_id}>
            <img src={item.product.image} alt={item.product.name} />
            <p>{item.product.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ${item.subtotal}</p>
            {/* Remove item button (implement logic to remove item from cart) */}
            <button>Remove</button>
          </li>
        ))}
      </ul>
      {/* Display total price and proceed to checkout button */}
      <p>Total: $100.00</p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
