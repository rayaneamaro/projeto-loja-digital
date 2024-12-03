import React from 'react';
import footerLogo from '../assets/logo-footer.svg';
import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer bg-dark-gray text-white">
    <div className="footer-container">
      {/* Logo e descrição */}
      <div className="footer-logo-section">
        <img src={footerLogo} alt="Drip Store Logo" width={253} height={44} />
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
        </p>
      </div>

      {/* Ícones sociais */}
      <div className="footer-social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>

      {/* Informações */}
      <div className="footer-info">
        <h5>Informações</h5>
        <ul>
          <li>
            <Link to="/about" className="footer-link">
              Sobre Drip Store
            </Link>
          </li>
          <li>
            <Link to="/blog" className="footer-link">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 Drip Store</p>
    </div>
  </footer>
);

export default Footer;
