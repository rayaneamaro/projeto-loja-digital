import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';

const products = [
  {
    name: "Tênis 1",
    image: '/product-thumb-1.jpeg',
    price: 299.99,
    priceDiscount: 199.99
  },
  {
    name: "Tênis 2",
    image: '/product-thumb-2.jpeg',
    price: 149.99
  },
  {
    name: "Tênis 3",
    image: '/product-thumb-3.jpeg',
    price: 499.99,
    priceDiscount: 399.99
  },
  {
    name: "Tênis 4",
    image: '/product-thumb-4.jpeg',
    price: 179.99
  },
];

const filterOptions = [
  { text: "Preço até R$100", value: "under100" },
  { text: "Preço entre R$100 e R$200", value: "between100and200" },
  { text: "Preço acima de R$200", value: "over200" }
];

const ProductListingPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value === 'under100') {
      setFilteredProducts(products.filter(product => product.price < 100));
    } else if (value === 'between100and200') {
      setFilteredProducts(products.filter(product => product.price >= 100 && product.price <= 200));
    } else if (value === 'over200') {
      setFilteredProducts(products.filter(product => product.price > 200));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <Layout>
      <div className="container d-flex">
        <aside style={{ width: '308px', padding: '1rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '1rem' }}>
            <h3 style={{ fontSize: '16px', color: '#474747' }}>Filtrar por</h3>
            <hr style={{ border: '1px solid #CCCCCC' }} />
            <FilterGroup title="Preço" inputType="radio" options={filterOptions} onChange={handleFilterChange} />
          </div>
        </aside>
        <main style={{ flexGrow: 1, padding: '1rem' }}>
          <h1>Listagem de Produtos</h1>
          <ProductListing products={filteredProducts} />
        </main>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
