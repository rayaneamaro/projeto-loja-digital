import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, titleAlign = "left", link, children }) => (
  <section className="section">
    <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ color: '#474747', fontSize: '24px', textAlign: titleAlign }}>{title}</h2>
      {link && (
        <a href={link.href} style={{ color: '#C92071', fontSize: '18px' }}>
          {link.text}
        </a>
      )}
    </div>
    <div className="section-content">
      {children}
    </div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  }),
  children: PropTypes.node
};

export default Section;
