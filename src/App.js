import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoBoda from './InfoBoda';
import './App.css';

function App() {
  return (
    <Router basename="/daniel-y-paola">
      <Routes>
        <Route path="/" element={<InfoBoda />} />
      </Routes>
    </Router>
  );
}

export default App;