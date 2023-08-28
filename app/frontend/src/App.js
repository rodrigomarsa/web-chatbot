import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Historic from './pages/Historic';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/historic" element={<Historic />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
