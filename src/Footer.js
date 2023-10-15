import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Faustine Elvaretta Tambila</p>
        <div className="social-icons">
          <a href="https://github.com/Faustineelvaretta/PemwebLanjut-3" className="icon">
            <i className="fa fa-globe"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;