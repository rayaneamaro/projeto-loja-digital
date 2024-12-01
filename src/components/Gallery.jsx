// src/components/Gallery.tsx
import React, { useState } from 'react';

interface GalleryProps {
    images: { src: string }[];
    width?: string;
    height?: string;
    radius?: string;
    showThumbs?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ images, width = '700px', height = '570px', radius = '4px', showThumbs = false }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div style={{ width, height, position: 'relative' }}>
            <img src={images[currentImage].src} alt={`Image ${currentImage + 1}`} style={{ width: '100%', height: '100%', borderRadius: radius }} />
            <button onClick={prevImage} style={styles.arrowLeft}>◀</button>
            <button onClick={nextImage} style={styles.arrowRight}>▶</button>
            {showThumbs && (
                <div style={styles.thumbnailContainer}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => setCurrentImage(index)}
                            style={{
                                ...styles.thumbnail,
                                borderRadius: radius,
                                border: currentImage === index ? '2px solid #C92071' : 'none',
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const styles = {
    arrowLeft: {
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
    },
    arrowRight: {
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
    },
    thumbnailContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '5px',
        marginTop: '10px',
    },
    thumbnail: {
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        objectFit: 'cover',
    },
};

export default Gallery;
