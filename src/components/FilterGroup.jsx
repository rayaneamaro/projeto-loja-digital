// src/components/FilterGroup.jsx
import React from 'react';

interface FilterGroupProps {
    title: string;
    inputType: 'checkbox' | 'radio';
    options: { text: string; value?: string }[];
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, inputType, options }) => (
    <div className="mb-3">
        <h5>{title}</h5>
        <div>
            {options.map((option, index) => (
                <label key={index} className="d-block">
                    <input type={inputType} name={title} value={option.value || option.text} />
                    {option.text}
                </label>
            ))}
        </div>
    </div>
);

export default FilterGroup;
