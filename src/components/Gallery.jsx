import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={`gallery ${className}`} style={{ width, height, position: 'relative' }}>
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '100%', height: '100%', borderRadius: radius }}
      />
      <img
        src={arrowLeft}
        alt="Previous"
        onClick={handlePrevClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
          opacity: currentIndex === 0 ? 0.5 : 1
        }}
      />
      <img
        src={arrowRight}
        alt="Next"
        onClick={handleNextClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          cursor: currentIndex === images.length - 1 ? 'not-allowed' : 'pointer',
          opacity: currentIndex === images.length - 1 ? 0.5 : 1
        }}
      />
      {showThumbs && (
        <div className="gallery-thumbnails" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '117px',
                height: '95px',
                borderRadius: radius,
                cursor: 'pointer',
                border: currentIndex === index ? '2px solid #C92071' : 'none',
                marginRight: '5px'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Gallery;
