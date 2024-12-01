import React from 'react';
import Layout from '../pages/Layout'; // Importando o Layout

const ProductListingPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Produtos Disponíveis</h1>
        {/* Exiba a lista de produtos aqui */}
      </div>
    </Layout>
  );
};

export default ProductListingPage;
