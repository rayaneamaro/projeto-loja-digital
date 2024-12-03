import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const galleryImages = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' }
];

const collections = [
  '/collection-1.png',
  '/collection-2.png',
  '/collection-3.png'
];

const products = [
  {
    name: "Tênis 1",
    image: '/product-thumb-1.jpeg',
    price: 299.99,
    priceDiscount: 199.99
  },
  {
    name: "Tênis 2",
    image: '/product-thumb-2.jpeg',
    price: 149.99
  },
  {
    name: "Tênis 3",
    image: '/product-thumb-3.jpeg',
    price: 499.99,
    priceDiscount: 399.99
  },
  {
    name: "Tênis 4",
    image: '/product-thumb-4.jpeg',
    price: 179.99
  },
  {
    name: "Tênis 5",
    image: '/product-thumb-5.jpeg',
    price: 229.99,
    priceDiscount: 179.99
  },

];

const HomePage = () => {
  return (
    <Layout>
      {/* Slide de Imagens */}
      <Gallery images={galleryImages} width="1180px" height="600px" />

      {/* Coleções em Destaque */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          {collections.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Coleção ${index + 1}`}
              style={{ width: '28%', borderRadius: '4px' }}
            />
          ))}
        </div>
      </Section>

      {/* Produtos em Alta */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </Layout>
  );
};

export default HomePage;
