import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">SmartNotes</h1>
      <p className="subtitle">Choose an option:</p>
      <ul className="options-list">
        <li>
          <Link to="/link" className="option-link">YouTube Summary</Link>
        </li>
        <li>
          <Link to="/record" className="option-link">Live Audio Summary</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
