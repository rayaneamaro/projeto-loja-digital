import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Importando os componentes necessários do react-router-dom
import LogoImage from '../assets/logo-header.svg';  // Importando o logo como componente SVG
import MiniCartIcon from '../assets/mini-cart.svg'; // Importando o ícone do carrinho (SVG)

const Header = () => {
  const [query, setQuery] = useState(''); // Estado para o campo de busca
  const navigate = useNavigate(); // Usando hook de navegação do react-router

  // Função para tratar a busca
  const handleSearch = () => {
    if (query) {
      navigate(`/products?filter=${query}`); // Redirecionando para a página de produtos com a query
    }
  };

  // Função para enviar a busca ao pressionar Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Componente de Logo */}
        <div className="logo-container">
          <LogoImage width={253} height={44} />
        </div>

        {/* Campo de Busca */}
        <div className="d-flex align-items-center" style={{ width: '300px' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Pesquisar produtos"
            className="form-control"
            style={{ borderRadius: '4px 0 0 4px' }}
          />
          <button
            onClick={handleSearch}
            className="btn btn-primary"
            style={{
              borderRadius: '0 4px 4px 0',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
            }}
          >
            <i className="bi bi-search"></i> {/* Ícone da lupa */}
          </button>
        </div>

        {/* Área de Redirecionamento (Cadastro, Login e Carrinho) */}
        <div className="d-flex gap-3 align-items-center">
          <Link
            to="/register"
            style={{
              fontSize: '16px',
              color: '#474747', // dark-gray-2
              textDecoration: 'underline',
            }}
          >
            Cadastre-se
          </Link>
          <Link
            to="/login"
            className="btn"
            style={{
              backgroundColor: '#C92071', // primary
              color: '#FFFFFF',
              width: '114px',
              height: '40px',
              fontWeight: 'bold',
              fontSize: '14px',
              borderRadius: '4px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            Entrar
          </Link>
          {/* Ícone do Carrinho */}
          <MiniCartIcon width={30} height={30} />
        </div>
      </div>

      {/* Navegação Principal */}
      <div className="bg-dark-gray py-2">
        <nav className="container d-flex justify-content-between">
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? '#C92071' : '#FFFFFF',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? '#C92071' : '#FFFFFF',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Produtos
          </NavLink>
          <NavLink
            to="/categories"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? '#C92071' : '#FFFFFF',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Categorias
          </NavLink>
          <NavLink
            to="/orders"
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? '#C92071' : '#FFFFFF',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Meus Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
