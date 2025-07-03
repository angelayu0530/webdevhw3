import React from 'react';

const regularMenu = [
  {
    name: "Double-Double Burger",
    description: "Two beef patties, two slices of cheese, lettuce, onions, tomato, and spread.",
    price: "$4.99"
  },
  {
    name: "Cheeseburger",
    description: "One beef patty, one slice of cheese, lettuce, tomato, onions, and spread.",
    price: "$3.49"
  },
  {
    name: "Hamburger",
    description: "One beef patty, lettuce, tomato, onions, and spread.",
    price: "$3.49"
  },
  {
    name: "French Fries",
    description: "Crispy golden fries, served hot.",
    price: "$2.49"
  },
  {
    name: "Milkshake",
    description: "Rich and creamy milkshake available in chocolate, vanilla, or strawberry.",
    price: "$3.99"
  }
];

const secretMenu = [
  {
    name: "Double-Meat",
    description: "Two 100% American beef patties, hand-leafed lettuce, tomato, spread, with or without onions, stacked high on a freshly baked bun.",
    price: "$4.99"
  },
  {
    name: "3x3",
    description: "Our 3x3 has three 100% American beef patties, hand-leafed lettuce, tomato, spread, three slices of American cheese, with or without onions, stacked high on a freshly baked bun.",
    price: "$5.00"
  },
  {
    name: "4x4",
    description: "Our 4x4 has four 100% American beef patties, hand-leafed lettuce, tomato, spread, three slices of American cheese, with or without onions, stacked high on a freshly baked bun.",
    price: "$8.00"
  },
  {
    name: "Grilled Cheese",
    description: "Two slices of melted American cheese, hand-leafed lettuce, tomato, spread, with or without onions on a freshly baked bun.",
    price: "$2.49"
  },
  {
    name: "Protein Style",
    description: "Your favorite burger wrapped in hand-leafed lettuce instead of a bun.",
    price: "$3.99"
  },
  {
    name: "Animal Style",
    description: "Burger of your choice with hand-leafed lettuce, tomato, a mustard-cooked beef patty; add pickle, extra spread, with grilled onions.",
    price: "$3.99"
  }
];

// Helper to get correct image path for GitHub Pages
function getImagePath(filename) {
  // If running on GitHub Pages, use process.env.PUBLIC_URL
  return process.env.PUBLIC_URL + '/images/' + filename;
}

function addToCart(name, price) {
  const priceNum = typeof price === 'string' ? parseFloat(price.replace('$', '')) : price;
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price: priceNum, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = count;
  });
}

function Menu() {
  return (
    <main>
      <section className="menu-section">
        <h2 className="menu-title">Menu</h2>
        <ul className="menu-list">
          {regularMenu.map(item => (
            <li className="menu-item" key={item.name}>
              {/* Example usage if you want to show images for menu items:
              <img src={getImagePath('double-double.jpg')} alt={item.name} />
              */}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
              <button
                className="add-to-cart"
                onClick={() => addToCart(item.name, item.price)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="menu-section">
        <h2 className="menu-title">Secret Menu</h2>
        <ul className="menu-list">
          {secretMenu.map(item => (
            <li className="menu-item" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
              <button
                className="add-to-cart"
                onClick={() => addToCart(item.name, item.price)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Menu;
