// src/components/Section.tsx
import React from 'react';

interface SectionProps {
    title: string;
    titleAlign?: 'left' | 'center';
    link?: { text: string; href: string };
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, titleAlign = 'left', link, children }) => (
    <section style={{ marginBottom: '2rem' }}>
        <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ textAlign: titleAlign }}>{title}</h2>
            {link && (
                <a href={link.href} style={{ textDecoration: 'none', color: '#C92071' }}>
                    {link.text}
                </a>
            )}
        </div>
        <div>{children}</div>
    </section>
);

export default Section;
