    import React from 'react';

    const Section = ({ title, titleAlign = 'left', link, children }) => {
      return (
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center">
            {/* Título da seção */}
            <h2 style={{ textAlign: titleAlign, color: '#474747' }}>{title}</h2>

            {/* Link (se houver) */}
            {link && (
              <a href={link.href} style={{ color: '#C92071', fontSize: '18px' }}>
                {link.text}
              </a>
            )}
          </div>

          {/* Conteúdo da seção */}
          <div className="mt-3">{children}</div>
        </section>
      );
    };

    export default Section;
