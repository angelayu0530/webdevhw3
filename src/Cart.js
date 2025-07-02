import React, { useEffect, useState } from 'react';
import './cart.css';

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartData = getCart();
    setCart(cartData);
    setTotal(cartData.reduce((sum, item) => sum + item.price * item.quantity, 0));
  }, []);

  const removeFromCart = (name) => {
    let updatedCart = cart.map(item => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);
    setCart(updatedCart);
    saveCart(updatedCart);
    setTotal(updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0));
  };

  useEffect(() => {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(el => {
      el.textContent = count;
    });
  }, [cart]);

  return (
    <main className="menu-page">
      <h2 className="menu-header">Your Shopping Cart</h2>
      <div id="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.name}>
              <span className="item-name">{item.name} ({item.quantity})</span>
              <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              <button className="remove-item" onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <strong>Total:</strong> ${total.toFixed(2)}
      </div>
    </main>
  );
}

export default Cart;
