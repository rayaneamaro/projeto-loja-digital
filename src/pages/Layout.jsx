import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

// Componente de Layout
const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      <main>{children}</main>

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default Layout;
