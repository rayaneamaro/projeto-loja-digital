import React from 'react';

const ProductCard = ({ image, name, price, priceDiscount, options }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} alt={name} className="card-img-top" style={{ width: '292px', height: '321px' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text" style={{ color: '#474747', fontSize: '24px' }}>
          {priceDiscount ? (
            <>
              <span style={{ textDecoration: 'line-through', color: '#8F8F8F' }}>
                R$ {price.toFixed(2)}
              </span>{' '}
              R$ {priceDiscount.toFixed(2)}
            </>
          ) : (
            `R$ ${price.toFixed(2)}`
          )}
        </p>

        {/* Componente de Opções de Produto */}
        <ProductOptions options={options} />

        <button className="btn btn-primary">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductCard;
