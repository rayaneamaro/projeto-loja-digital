// src/components/BuyBox.tsx
import React from 'react';

interface BuyBoxProps {
    name: string;
    reference: string;
    stars: number;
    rating: number;
    price: number;
    priceDiscount?: number;
    description: string;
    children?: React.ReactNode;
}

const BuyBox: React.FC<BuyBoxProps> = ({
    name,
    reference,
    stars,
    rating,
    price,
    priceDiscount,
    description,
    children,
}) => (
    <div className="card p-3">
        <h2>{name}</h2>
        <p>Ref: {reference}</p>
        <div>
            <span className="badge bg-warning">{stars} ★</span>
            <span className="ms-2 text-muted">({rating} avaliações)</span>
        </div>
        <div>
            {priceDiscount ? (
                <>
                    <span style={{ textDecoration: 'line-through' }}>R$ {price.toFixed(2)}</span>
                    <span className="text-danger ms-2">R$ {priceDiscount.toFixed(2)}</span>
                </>
            ) : (
                <span>R$ {price.toFixed(2)}</span>
            )}
        </div>
        <p>{description}</p>
        {children}
        <button className="btn btn-success">Comprar</button>
    </div>
);

export default BuyBox;
