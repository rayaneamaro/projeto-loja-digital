import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?filter=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', flex: 1 }}
      />
      <button type="submit" style={{ background: 'none', border: 'none' }}>
        <img src="/assets/search-icon.svg" alt="Search" />
      </button>
    </form>
  );
};

export default SearchBar;
