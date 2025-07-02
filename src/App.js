import React, { useState, useEffect } from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';

const sliderImages = [
  '/images/resturant1.jpg',
  '/images/resturant2.jpg',
  '/images/image3.webp',
  '/images/image5.jpg',
  '/images/image 10.jpg',
  '/images/lol.webp'
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (n) => {
    let newIndex = n;
    if (newIndex >= sliderImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = sliderImages.length - 1;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
   
  }, [currentSlide]);

  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <div className="nav-left">
            <img src="/images/InNOut_2021_logo.svg.png" alt="In-N-Out Logo" className="logo" />
          </div>
          <div className="nav-center">
            <h1 className="title">IN-N-OUT</h1>
          </div>
          <div className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart" className="cart-link">
              <img
                src="/images/images123.png"
                alt="Cart"
                style={{ height: '1.5em', verticalAlign: 'middle' }}
              />
              (<span id="cart-count">0</span>)
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <main className="main">
                <div className="main-h1">
                  <h1 className="h1">Welcome to In-N-Out</h1>
                  <img src="/images/double-double-meal.webp" alt="In-N-Out Burger" className="main-image" />
                </div>
              </main>
              <div className="slider-container">
                <h1 className="title">Gallery</h1>
                <button className="slider-button prev" onClick={() => showSlide(currentSlide - 1)}>❮</button>
                <div className="image-slider">
                  {sliderImages.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      className={`slide${idx === currentSlide ? ' active' : ''}`}
                      alt=""
                      style={{ display: idx === currentSlide ? 'block' : 'none' }}
                    />
                  ))}
                </div>
                <button className="slider-button next" onClick={() => showSlide(currentSlide + 1)}>❯</button>
              </div>
            </>
          } />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <div className="business-hours">
              <h3>Business Hours</h3>
              <ul>
                <li>Monday - Thursday: 10:30 AM - 1:00 AM</li>
                <li>Friday - Saturday: 10:30 AM - 1:30 AM</li>
                <li>Sunday: 10:30 AM - 1:00 AM</li>
              </ul>
            </div>
            <div className="social-links">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="https://facebook.com/innout" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com/innout" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/innout" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom"></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

