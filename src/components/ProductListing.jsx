import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductListing = ({ products }) => (
  <div className="product-listing">
    {products.map((product, index) => (
      <ProductCard
        key={index}
        image={product.image}
        name={product.name}
        price={product.price}
        priceDiscount={product.priceDiscount}
      />
    ))}
  </div>
);

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      priceDiscount: PropTypes.number
    })
  ).isRequired
};

export default ProductListing;
