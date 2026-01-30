import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Koukaten-image-carousel">
      {images.map((src, idx) => {
        let className = "Koukaten-carousel-image";

        if (idx === current) className += " center";
        else if (idx === (current + 1) % images.length) className += " right";
        else if (idx === (current - 1 + images.length) % images.length) className += " left";
        else className += " hidden";

        return (
          <img
            key={idx}
            className={className}
            src={src}
            alt={`carousel-${idx}`}
          />
        );
      })}
    </div>
  );
}

export default ImageCarousel;
