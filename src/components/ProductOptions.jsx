import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductOptions = ({ options, radius, shape, type, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${selectedOption === option ? 'selected' : ''}`}
          style={{
            display: 'inline-block',
            width: shape === 'circle' ? '31px' : '46px',
            height: shape === 'circle' ? '31px' : '46px',
            borderRadius: shape === 'circle' ? '50%' : radius,
            border: '1px solid #CCCCCC',
            textAlign: 'center',
            lineHeight: shape === 'circle' ? '31px' : '46px',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            cursor: 'pointer',
            backgroundColor: type === 'color' ? option : 'transparent',
            color: type === 'text' ? '#474747' : 'transparent',
          }}
          onClick={() => handleOptionClick(option)}
        >
          {type === 'text' && option}
        </div>
      ))}
    </div>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProductOptions;
