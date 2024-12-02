import React from 'react';
import Logo from '../assets/logo-header.svg';
import SearchBar from './SearchBar';
import RedirectArea from './RedirectArea';
import CartIcon from './CartIcon';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
      <Logo />
      <Navigation />
      <SearchBar />
      <div style={{ display: 'flex', gap: '20px' }}>
        <RedirectArea />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
