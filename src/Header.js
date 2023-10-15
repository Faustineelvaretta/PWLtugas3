import React from 'react';
import './Header.css';
import logo from './logo.svg'; 

function Header() {
  return (
    <header>
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <h1>My Blog With React JS</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/tentang">About</a>
            </li>
            <li>
              <a href="/kontak">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
