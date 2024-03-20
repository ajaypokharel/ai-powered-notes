import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Import your SmartNotes logo
import './index.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <Link to="/" className="logo-link">
          <img src={logo} alt="SmartNotes Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/link">YouTube</Link>
        <Link to="/record">Live</Link>
      </nav>
    </header>
  );
};

export default Header;
