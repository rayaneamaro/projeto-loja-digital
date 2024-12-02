import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeStyle = { color: 'var(--primary)', borderBottom: '2px solid var(--primary)' };

  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Home
      </NavLink>
      <NavLink to="/products" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Produtos
      </NavLink>
      <NavLink to="/categories" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Categorias
      </NavLink>
      <NavLink to="/orders" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Meus Pedidos
      </NavLink>
    </nav>
  );
};

export default Navigation;
