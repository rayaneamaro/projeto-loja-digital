import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
      </Routes>
    </Router>// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductViewPage from './pages/ProductViewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductViewPage />} />
        {/* Outras rotas aqui */}
      </Routes>
    </Router>
  );
}

export default App;

  );
};

export default App;
