import React, { useState } from 'react';

const ProductOptions = ({ options, radius = '4px', shape = 'square', type = 'text' }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="d-flex gap-2 mt-3">
      {options.map((option, index) => (
        <div
          key={index}
          className={`d-flex justify-content-center align-items-center`}
          style={{
            width: shape === 'circle' ? '31px' : '46px',
            height: shape === 'circle' ? '31px' : '46px',
            borderRadius: shape === 'circle' ? '50%' : radius,
            border: `1px solid ${selectedOption === option ? '#C92071' : '#CCCCCC'}`,
            backgroundColor: type === 'color' ? option : 'transparent',
            cursor: 'pointer',
            fontSize: type === 'text' ? '24px' : 'initial',
            color: type === 'text' ? '#474747' : 'transparent',
          }}
          onClick={() => handleClick(option)}
        >
          {type === 'text' ? option : ''}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
