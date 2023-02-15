import React, { useState } from 'react';
import Image from 'next/image'

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 -ml-10 -mt-10 p-2 rounded-full bg-white hover:bg-gray-200 focus:outline-none"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 -mr-10 -mt-10 p-2 rounded-full bg-white hover:bg-gray-200 focus:outline-none"
        onClick={handleNextClick}
      >
        Next
      </button>
      <div className="overflow-hidden">
        <div className="flex items-center">
          {images.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
            <Image
              key={index}
              className="w-full h-full max-h-96 mr-2 hover:scale-125 last:mr-0"
              src={image}
              alt="Carousel image"
              height="500"
              width="500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;