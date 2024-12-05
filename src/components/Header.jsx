import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import HeaderLogo from '../assets/logo-header.svg';
import miniCartIcon from '../assets/mini-cart.svg';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/products?filter=${query}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src={HeaderLogo} alt="Logo" width="253" height="44" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pesquisar produtos..."
          />
          <button onClick={handleSearch}>🔍</button>
        </div>
        <div className="header-actions">
          <Link to="/register" className="register-btn">
            Cadastre-se
          </Link>
          <Link to="/login" className="login-btn">
            Entrar
          </Link>
          <img src={miniCartIcon} alt="Carrinho" className="cart-icon" />
        </div>
      </div>
      <nav className="header-nav">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link" activeClassName="active">
          Produtos
        </NavLink>
        <NavLink to="/categories" className="nav-link" activeClassName="active">
          Categorias
        </NavLink>
        <NavLink to="/orders" className="nav-link" activeClassName="active">
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
