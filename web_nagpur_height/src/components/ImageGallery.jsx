"use client";

import { useState } from "react";

export default function ImageGallery({ images, title }) {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div>
      {/* Main Image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-4">
        <img
          loading="lazy"
          src={images[mainImage]}
          alt={title}
          className="w-full h-96 object-cover transition-all duration-500 ease-in-out rounded-xl"
        />
        {/* make css - object-contain to make img looks good */}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(index)}
            className={`rounded-md overflow-hidden transition-all duration-300 transform ${
              mainImage === index
                ? "ring-2 ring-blue-500 scale-105"
                : "opacity-80 hover:opacity-100 hover:scale-105"
            }`}
          >
            <img
              loading="lazy"
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
