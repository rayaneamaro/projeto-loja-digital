import React, { useState } from 'react';
import Layout from '../pages/Layout';
import ProductListing from '../components/ProductListing';

const ProductListingPage = () => {
  const [filter, setFilter] = useState('');

  // Dados simulados para produtos
  const allProducts = [
    {
      name: 'Tênis Esportivo 1',
      image: '/product-thumb-1.png',
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: 'Tênis Esportivo 2',
      image: '/product-thumb-2.png',
      price: 299,
    },
    {
      name: 'Tênis Casual',
      image: '/product-thumb-3.png',
      price: 199,
      priceDiscount: 179.9,
    },
    {
      name: 'Tênis Corrida',
      image: '/product-thumb-4.png',
      price: 399,
      priceDiscount: 349.9,
    },
  ];

  // Filtro dos produtos
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <div className="container my-5">
        <h1>Listagem de Produtos</h1>

        {/* Campo de Busca */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="form-control"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        {/* Lista de Produtos */}
        <ProductListing products={filteredProducts} />
      </div>
    </Layout>
  );
};

export default ProductListingPage;
