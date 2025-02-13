import React from 'react';
import '../styles/App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Camera Co.</div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;