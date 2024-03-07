import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Summarization from './components/Link/Link';
import Record from './components/Record/Record';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/link" element={<Summarization />} />
        <Route exact path="/record" element={<Record />} />
      </Routes>
    </Router>
  );
};

export default App;
