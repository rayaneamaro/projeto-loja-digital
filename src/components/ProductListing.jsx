import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = () => {
  const products = [
    {
      name: 'Tênis Esportivo',
      image: '/product-image-2.jpg', // Caminho correto
      price: 299.99,
      priceDiscount: 249.99,
      options: {
        sizes: ['39', '40', '41', '42'],
        colors: ['Preto', 'Branco', 'Cinza'],
      },
    },
    {
      name: 'Tênis Casual',
      image: '/product-image-3.jpg', // Caminho correto
      price: 199.99,
      priceDiscount: 149.99,
      options: {
        sizes: ['36', '38', '40', '42'],
        colors: ['Azul', 'Bege', 'Vermelho'],
      },
    },
  ];

  return (
    <div className="row">
      {products.map((product, index) => (
        <div key={index} className="col-md-4 mb-4">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
