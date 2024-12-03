import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ image, name, price, priceDiscount }) => (
  <div className="product-card">
    <img src={image} alt={name} style={{ width: '212px', height: '230px' }} />
    <h3>{name}</h3>
    <p style={{ color: priceDiscount ? '#CCCCCC' : '#1F1F1F', textDecoration: priceDiscount ? 'line-through' : 'none' }}>
      R${price}
    </p>
    {priceDiscount && <p style={{ color: '#1F1F1F' }}>R${priceDiscount}</p>}
  </div>
);

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number
};

export default ProductCard;
