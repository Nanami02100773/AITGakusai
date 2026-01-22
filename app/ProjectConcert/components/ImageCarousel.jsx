import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Concert-image-carousel">
      {Array.isArray(images) &&
        images.map((src, idx) => {
          let className = "Concert-carousel-image";

          if (idx === current) className += " center";
          else if (idx === (current + 1) % images.length) className += " right";
          else if (idx === (current - 1 + images.length) % images.length)
            className += " left";
          else className += " hidden";

          return (
            <img
              key={idx}
              src={src}
              alt={`carousel-${idx}`}
              className={className}
            />
          );
        })}
    </div>
  );
}

export default ImageCarousel;
