import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Shopping Cart</h1>
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
  );
};

export default ShoppingCart;
