// src/components/BuyBox.jsx

import React from 'react';
import ProductOptions from './ProductOptions';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div className="buy-box">
      <h2 className="text-dark-gray mb-2" style={{ fontSize: '32px' }}>{name}</h2>
      <p className="text-dark-gray-3 mb-4" style={{ fontSize: '12px' }}>{reference}</p>

      {/* Estrelas */}
      <div className="stars mb-2" style={{ backgroundColor: '#F6AA1C', borderRadius: '4px', padding: '5px' }}>
        <span className="text-white">{stars}</span>
        <img src="/src/assets/star-icon.svg" alt="Star Icon" style={{ width: '14px', marginLeft: '5px' }} />
      </div>

      {/* Avaliações */}
      <p className="text-light-gray mb-4" style={{ fontSize: '14px' }}>{rating} avaliações</p>

      {/* Preços */}
      <div className="prices mb-4">
        <p className="text-dark-gray-2" style={{ fontSize: '32px' }}>
          {priceDiscount ? (
            <>
              <span style={{ textDecoration: 'line-through', fontSize: '16px', color: '#D1D1D1' }}>
                R$ {price}
              </span>
              <span> R$ {priceDiscount}</span>
            </>
          ) : (
            `R$ ${price}`
          )}
        </p>
      </div>

      {/* Descrição */}
      <p className="text-dark-gray-2 mb-4" style={{ fontSize: '14px' }}>{description}</p>

      {/* Opções do produto */}
      {children}

      {/* Botão Comprar */}
      <button className="btn btn-warning text-white mt-3" style={{ fontSize: '16px' }}>
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;
