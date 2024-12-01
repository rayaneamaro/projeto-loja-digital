import React from 'react';
import Layout from '../pages/Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const HomePage = () => {
  // Dados para o Slide de Imagens
  const slideImages = [
    { src: '/home-slide-1.jpeg' },
    { src: '/home-slide-2.jpeg' },
    { src: '/home-slide-3.jpeg' },
  ];

  // Dados para Produtos em Alta
  const trendingProducts = [
    {
      name: 'Tênis Esportivo 1',
      image: '/product-thumb-1.png',
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: 'Tênis Esportivo 2',
      image: '/product-thumb-2.png',
      price: 299,
    },
    {
      name: 'Tênis Casual',
      image: '/product-thumb-3.png',
      price: 199,
      priceDiscount: 179.9,
    },
    {
      name: 'Tênis Corrida',
      image: '/product-thumb-4.png',
      price: 399,
      priceDiscount: 349.9,
    },
    {
      name: 'Tênis Social',
      image: '/product-thumb-5.png',
      price: 350,
    },
    {
      name: 'Tênis Feminino',
      image: '/product-thumb-6.png',
      price: 250,
      priceDiscount: 199.9,
    },
    {
      name: 'Tênis Masculino',
      image: '/product-thumb-7.png',
      price: 180,
    },
    {
      name: 'Tênis Estiloso',
      image: '/product-thumb-8.png',
      price: 220,
      priceDiscount: 190.9,
    },
  ];

  return (
    <Layout>
      {/* Slide de Imagens */}
      <Gallery images={slideImages} width="1440px" height="681px" />

      {/* Coleções em Destaque */}
      <Section title="Coleções em Destaque" titleAlign="center">
        <div className="d-flex justify-content-around mt-4">
          <img
            src="/collection-1.png"
            alt="Coleção 1"
            style={{ width: '30%', borderRadius: '4px' }}
          />
          <img
            src="/collection-2.png"
            alt="Coleção 2"
            style={{ width: '30%', borderRadius: '4px' }}
          />
          <img
            src="/collection-3.png"
            alt="Coleção 3"
            style={{ width: '30%', borderRadius: '4px' }}
          />
        </div>
      </Section>

      {/* Produtos em Alta */}
      <Section title="Produtos em Alta" titleAlign="left">
        <ProductListing products={trendingProducts} />
      </Section>
    </Layout>
  );
};

export default HomePage;
