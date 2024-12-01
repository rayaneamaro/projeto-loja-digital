import React from 'react';
import { ReactComponent as Logo } from '../assets/logo-footer.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';  // Importa o ícone do Facebook como componente React
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';    // Importa o ícone do Twitter como componente React
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'; // Importa o ícone do Instagram como componente React

// Componente para renderizar as informações dinâmicas
const InformationSection = ({ title, informations }) => (
  <div className="mb-4">
    <h5>{title}</h5>
    <ul className="list-unstyled">
      {informations.map((info, index) => (
        <li key={index}>
          <a href={info.link} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
            {info.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const informationData = [
    { text: "Sobre a Digital Store", link: "/about" },
    { text: "Blog", link: "/blog" },
    { text: "Suporte", link: "/support" },
    { text: "FAQ", link: "/faq" },
  ];

  return (
    <footer className="bg-dark-gray text-white py-5">
      <div className="container">
        {/* Logo */}
        <div className="text-center mb-4">
          <Logo width={150} height={30} />
        </div>

        {/* Descrição da empresa */}
        <div className="text-center mb-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus quam sit amet sem pharetra, in tempor erat auctor.</p>
        </div>

        {/* Redes sociais */}
        <div className="text-center mb-4">
          <a href="https://facebook.com" className="me-3">
            <FacebookIcon width={30} height={30} />
          </a>
          <a href="https://twitter.com" className="me-3">
            <TwitterIcon width={30} height={30} />
          </a>
          <a href="https://instagram.com">
            <InstagramIcon width={30} height={30} />
          </a>
        </div>

        {/* Componente de informações */}
        <InformationSection title="Informações" informations={informationData} />

        {/* Linha horizontal */}
        <hr className="border-white" />

        {/* Direitos autorais */}
        <div className="text-center mt-4">
          <p>© {new Date().getFullYear()} Digital Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
