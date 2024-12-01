// src/components/ProductOptions.tsx
import React, { useState } from 'react';

interface ProductOptionsProps {
    options: string[];
    shape: 'square' | 'circle';
    type: 'text' | 'color';
    radius?: string;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ options, shape, type, radius = '4px' }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            {options.map((option, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedOption(option)}
                    style={{
                        width: shape === 'circle' ? '31px' : '46px',
                        height: shape === 'circle' ? '31px' : '46px',
                        borderRadius: shape === 'circle' ? '50%' : radius,
                        backgroundColor: type === 'color' ? option : '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: selectedOption === option ? '2px solid #C92071' : '1px solid #ccc',
                        color: type === 'text' ? '#474747' : 'transparent',
                    }}
                >
                    {type === 'text' && option}
                </div>
            ))}
        </div>
    );
};

export default ProductOptions;
