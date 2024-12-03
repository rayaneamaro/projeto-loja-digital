import React from 'react';
import PropTypes from 'prop-types';

const FilterGroup = ({ title, inputType, options, onChange }) => (
  <div className="filter-group">
    <h4 style={{ fontSize: '14px', color: '#474747' }}>{title}</h4>
    <div style={{ borderBottom: '1px solid #CCCCCC', paddingBottom: '1rem', marginBottom: '1rem' }} />
    {options.map((option, index) => (
      <div key={index} style={{ marginBottom: '0.5rem' }}>
        <input
          type={inputType}
          value={option.value || option.text}
          id={`filter-${title}-${index}`}
          name={`filter-${title}`}
          onChange={onChange}
          style={{ width: '22px', height: '22px', marginRight: '0.5rem', verticalAlign: 'middle' }}
        />
        <label htmlFor={`filter-${title}-${index}`} style={{ fontSize: '14px', color: '#474747' }}>
          {option.text}
        </label>
      </div>
    ))}
  </div>
);

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterGroup;
