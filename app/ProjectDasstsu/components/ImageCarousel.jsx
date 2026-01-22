import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

function DasstsuImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Dasstsu-image-carousel">
      {Array.isArray(images) &&
        images.map((src, idx) => {
          let className = "Dasstsu-carousel-image";

          if (idx === current) className += " center";
          else if (idx === (current + 1) % images.length) className += " right";
          else if (idx === (current - 1 + images.length) % images.length) className += " left";
          else className += " hidden";

          return (
            <img
              className={className}
              src={src}
              alt={`carousel-${idx}`}
              key={idx}
            />
          );
        })}
    </div>
  );
}

export default DasstsuImageCarousel;
