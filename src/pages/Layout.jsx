import React from 'react';
import Header from '../components/Header';  // Caminho para o Header
import Footer from '../components/Footer';  // Caminho para o Footer

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      <main className="my-5">
        {children}
      </main>

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default Layout;
