import React, { useState } from 'react';
import './ImageGallery.css';

const apartmentImages = [
  '/images/golden.jpg',
  '/images/golden-kitchen.jpg',
  '/images/golden-bedroom.jpg',
  '/images/golden-bathroom.jpg',
  '/images/golden-balcony.jpg',
];

function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % apartmentImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + apartmentImages.length) % apartmentImages.length
    );
  };

  return (
    <div className="image-gallery-container">
      <div className="gallery-main-image">
        <img src={apartmentImages[currentImageIndex]} alt={`Apartment view ${currentImageIndex + 1}`} />
      </div>
      <div className="gallery-controls">
        <button onClick={prevImage}>&lt;</button>
        <div className="thumbnails">
          {apartmentImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={index === currentImageIndex ? 'active' : ''}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <button onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
}

export default ImageGallery;