import React from 'react';
import './Tentang.css';
import logo from './foto.jpg'; 

function Tentang() {
  return (
    <main className="tentang-container">
      <h2>Tentang Saya</h2>
      <div className="profil">
        <img src={logo} alt="Logo" className="foto-pembuat" />
        <div className="informasi-pembuat">
          <h3>Faustine Elvaretta Tambila</h3>
          <p>
            Perkenalkan, saya Faustine Elvaretta Tambila dengan NIM 120140157
          </p>
        </div>
      </div>
    </main>
  );
}

export default Tentang;
