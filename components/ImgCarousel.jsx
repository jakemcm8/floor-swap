import Image from 'next/image'
import { useState } from 'react'

const ImgCarousel = ({images}) => {


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  }

  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)
  }

  return (
    <div className="relative">
      <button
        className=""
        onClick="{handlePrev}"
      >
      Prev
      </button>
        <button
          className=""
          onClick="{handleNext}"
        >
        Next
      </button>
      <div className="overflow-hidden">
        <div className="flex items-center">
          {images.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => {
            <Image/
              className=""
              src={image}
              key={index}
              alt="Carousel Image"
            >
          })}
        </div>
      </div>
    </div>
  )
}

export default ImgCarousel;