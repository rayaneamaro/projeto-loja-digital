        import React, { useState } from 'react';
        import ArrowRightIcon from '../assets/arrow-right.svg';
        import ArrowLeftIcon from '../assets/arrow-left.svg';

        const Gallery = ({ images, width = '600px', height = '400px', radius = '10px', showThumbs = false }) => {
          const [currentIndex, setCurrentIndex] = useState(0);

          const goToNextImage = () => {
            if (currentIndex < images.length - 1) {
              setCurrentIndex(currentIndex + 1);
            }
          };

          const goToPreviousImage = () => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
            }
          };

          const handleThumbnailClick = (index) => {
            setCurrentIndex(index);
          };

          return (
            <div className="gallery-container" style={{ width, height, position: 'relative' }}>
              {/* Imagem em destaque */}
              <img
                src={images[currentIndex].src}
                alt={`Image ${currentIndex + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: radius,
                  objectFit: 'cover',
                }}
              />

              {/* Setas de navegação */}
              <button onClick={goToPreviousImage} disabled={currentIndex === 0} style={arrowStyles('left')}>
                <ArrowLeftIcon width={30} height={30} />
              </button>
              <button onClick={goToNextImage} disabled={currentIndex === images.length - 1} style={arrowStyles('right')}>
                <ArrowRightIcon width={30} height={30} />
              </button>

              {/* Thumbnails */}
              {showThumbs && (
                <div className="thumbnails" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      style={{
                        width: '117px',
                        height: '95px',
                        borderRadius: radius,
                        cursor: 'pointer',
                        border: currentIndex === index ? '2px solid #C92071' : 'none',
                        margin: '0 5px',
                      }}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          );

          function arrowStyles(position) {
            return {
              position: 'absolute',
              top: '50%',
              [position]: '10px',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 2,
            };
          }
        };

        export default Gallery;
