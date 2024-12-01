    import React from 'react';
    import { ReactComponent as StarIcon } from '../assets/star-icon.svg';

    const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
      return (
        <div style={{ width: '400px', padding: '20px', border: '1px solid #CCCCCC', borderRadius: '4px' }}>
          <h1 style={{ fontSize: '32px', color: '#474747' }}>{name}</h1>
          <p style={{ fontSize: '12px', color: '#8F8F8F' }}>Referência: {reference}</p>

          <div className="d-flex align-items-center gap-2 my-2">
            <span
              style={{
                fontSize: '14px',
                backgroundColor: '#F6AA1C',
                color: '#FFFFFF',
                borderRadius: '4px',
                padding: '2px 6px',
              }}
            >
              {stars} <StarIcon />
            </span>
            <span style={{ fontSize: '14px', color: '#CCCCCC' }}>{rating} avaliações</span>
          </div>

          <p style={{ fontSize: '16px', color: '#CCCCCC', textDecoration: priceDiscount ? 'line-through' : 'none' }}>
            R$ {price.toFixed(2)}
          </p>
          {priceDiscount && (
            <p style={{ fontSize: '32px', color: '#474747', marginTop: '-10px' }}>R$ {priceDiscount.toFixed(2)}</p>
          )}

          <p style={{ fontSize: '14px', color: '#474747', marginTop: '10px' }}>{description}</p>

          {children}

          <button className="btn btn-warning mt-4 text-white" style={{ fontSize: '16px' }}>
            Comprar
          </button>
        </div>
      );
    };

    export default BuyBox;
