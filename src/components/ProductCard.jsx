// src/components/ProductCard/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        price: number;
        priceDiscount?: number;
        image: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className="card">
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            {product.priceDiscount ? (
                <div>
                    <span className="text-muted" style={{ textDecoration: 'line-through' }}>
                        R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-danger ms-2">R$ {product.priceDiscount.toFixed(2)}</span>
                </div>
            ) : (
                <p className="card-text">R$ {product.price.toFixed(2)}</p>
            )}
            <button className="btn btn-primary">Ver Detalhes</button>
        </div>
    </div>
);

export default ProductCard;

