// src/pages/ProductViewPage/ProductViewPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

const product: Product = {
    id: 1,
    name: 'Produto 1',
    price: 100,
    description: 'Descrição detalhada do produto.',
    image: '/img1.jpg',
};

const ProductViewPage: React.FC = () => (
    <>
        <Header />
        <main className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h2>R$ {product.price.toFixed(2)}</h2>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </main>
        <Footer />
    </>
);

export default ProductViewPage;
