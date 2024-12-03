import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starIcon from '../assets/star-icon.svg';
import ProductOptions from './ProductOptions';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, sizes, colors }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="buy-box">
      <h2 style={{ fontSize: '32px', color: '#1F1F1F' }}>{name}</h2>
      <p style={{ fontSize: '12px', color: '#666666' }}>Ref: {reference}</p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ backgroundColor: '#F6AA1C', borderRadius: '4px', padding: '0.25rem 0.5rem', marginRight: '0.5rem', fontSize: '14px' }}>
          {stars} <img src={starIcon} alt="star" style={{ width: '14px' }} />
        </div>
        <p style={{ fontSize: '14px', color: '#8F8F8F' }}>({rating} avaliações)</p>
      </div>
      <div style={{ fontSize: '32px', color: '#1F1F1F', marginBottom: '1rem' }}>
        {priceDiscount ? (
          <>
            <span style={{ fontSize: '16px', color: '#CCCCCC', textDecoration: 'line-through' }}>R${price}</span>
            <span style={{ marginLeft: '0.5rem' }}>R${priceDiscount}</span>
          </>
        ) : (
          <span>R${price}</span>
        )}
      </div>
      <p style={{ fontSize: '14px', color: '#474747', marginBottom: '1rem' }}>{description}</p>

      <h4>Tamanhos Disponíveis</h4>
      <ProductOptions options={sizes} shape="square" type="text" radius="4px" onChange={setSelectedSize} />
      <p>Tamanho selecionado: {selectedSize}</p>

      <h4>Cores Disponíveis</h4>
      <ProductOptions options={colors} shape="circle" type="color" onChange={setSelectedColor} />
      <p>Cor selecionada: {selectedColor}</p>

      <button style={{ backgroundColor: '#F6AA1C', color: '#FFFFFF', fontSize: '16px', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
        COMPRAR
      </button>
    </div>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  description: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BuyBox;
