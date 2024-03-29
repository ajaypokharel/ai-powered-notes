import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Summarization from './components/Link/Link';
import Record from './components/Record/Record';
import Header from './components/Header/Header';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/link" element={<Summarization />} />
        <Route exact path="/record" element={<Record />} />
      </Routes>
      </div>

    </Router>
  );
};

export default App;
