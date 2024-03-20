import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Take Notes With <span className="blue-text">AI</span></h1>
      <p className="subtitle">Focus on your lecture. Let SmartNotes handle the notes.</p>
      <ul className="options-list">
          <Link to="/link" className="option-link">YouTube Summary</Link>
          <Link to="/record" className="option-link">Live Audio Summary</Link>
      </ul>
    </div>
  );
};

export default Home;
