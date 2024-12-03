import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const productImages = [
  { src: '/product-image-1.jpeg' },
  { src: '/product-image-2.jpeg' },
  { src: '/product-image-3.jpeg' }
];

const productOptionsSizes = ["39", "41", "42", "43"];
const productOptionsColors = ["#000000", "#111111", "#333333", "#444444"];

const relatedProducts = [
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
  }
];

const ProductViewPage = () => (
  <Layout>
    <div className="container d-flex">
      <Gallery images={productImages} width="600px" height="470px" radius="4px" showThumbs />
      <BuyBox
        name="Tênis"
        reference="ABC123"
        stars={4.5}
        rating={30}
        price={299.99}
        priceDiscount={199.99}
        description="Tênis de alta qualidade, ideal para atividades físicas e uso diário."
      >
        <h4>Tamanhos Disponíveis</h4>
        <ProductOptions options={productOptionsSizes} shape="square" type="text" radius="4px" />
        <h4>Cores Disponíveis</h4>
        <ProductOptions options={productOptionsColors} shape="circle" type="color" />
      </BuyBox>
    </div>
    <Section title="Produtos recomendados" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
      <ProductListing products={relatedProducts} />
    </Section>
  </Layout>
);

export default ProductViewPage;
