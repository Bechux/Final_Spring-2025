import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../assets/images/whale.jpg';
import img2 from '../assets/images/moose.jpg';
import img3 from '../assets/images/cafe.jpg';

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (img) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="gallery-container">
      <div className="bento-grid">
        <div className="bento-item bento-main" onClick={() => openLightbox(img1)}>
          <img src={img1} alt="Main exhibit" />
        </div>
        <div className="bento-item bento-top" onClick={() => openLightbox(img2)}>
          <img src={img2} alt="Upper right exhibit" />
        </div>
        <div className="bento-item bento-bottom" onClick={() => openLightbox(img3)}>
          <img src={img3} alt="Lower right exhibit" />
        </div>
      </div>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;