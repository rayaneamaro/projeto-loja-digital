import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const ProductViewPage = () => {
  const { id } = useParams();

  const product = {
    id: id,
    name: 'Tênis Esportivo',
    reference: 'ABC123',
    stars: 4.5,
    rating: 120,
    price: 249.99,
    priceDiscount: 199.99,
    description: 'Tênis confortável e ideal para atividades físicas.',
    options: {
      sizes: ['38', '39', '40', '41', '42'],
      colors: ['#000000', '#FFFFFF', '#808080'],
    },
    images: [
      { src: '/product-image-1.png' },
      { src: '/product-image-2.png' },
      { src: '/product-image-3.png' },
    ],
  };

  const relatedProducts = [
    {
      name: 'Tênis Casual',
      image: 'public/product-thumb-1.png',
      price: 199.99,
      priceDiscount: 149.99,
    },
    {
      name: 'Tênis Corrida',
      image: 'public/product-thumb-2.png',
      price: 399.99,
    },
  ];

  return (
    <Layout>
      <div className="container my-5">
        <div className="row">
          {/* Galeria de Imagens */}
          <div className="col-md-6">
            <Gallery
              images={product.images}
              width="700px"
              height="570px"
              radius="4px"
              showThumbs
            />
          </div>

          {/* Buy Box */}
          <div className="col-md-6">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              {/* Opções de Produto */}
              <ProductOptions options={product.options.sizes} shape="square" type="text" />
              <ProductOptions options={product.options.colors} shape="circle" type="color" />
            </BuyBox>
          </div>
        </div>

        {/* Produtos Recomendados */}
        <Section
          title="Produtos Recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/produtos' }}
        >
          <ProductListing products={relatedProducts} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
