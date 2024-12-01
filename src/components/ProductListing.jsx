// src/components/ProductListing.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
    id: number;
    name: string;
    price: number;
    priceDiscount?: number;
    image: string;
}

interface ProductListingProps {
    products: Product[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products }) => (
    <div className="row">
        {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
                <ProductCard product={product} />
            </div>
        ))}
    </div>
);

export default ProductListing;
