import React, { useState } from 'react';
import {
  BsArrowDownShort,
} from 'react-icons/bs';

interface ImageProps {
  images: {
    thumbnail: string;
    fullSize: string;
    alt: string;
  }[];
}

const Images: React.FC<ImageProps> = ({ images }) => {
  const [isLightbox, setLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState('/images/Pic923056.jpg');

  const handleClick = () => {
    setLightbox(!isLightbox);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setLightbox(!isLightbox);
    }
  };

  const fullSizeClick = (image) => {
    setSelectedImage(image);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className='grid sm:grid md:flex lg:grid grid-cols-1 md:w-3/4 lg:w-1/2 max-sm:h-3/4 max-sm:w-full max-sm:mb-3 justify-items-center sm:justify-items-center md:justify-items-end md:justify-center lg:justify-items-center'>
      {selectedImage && (
        <img
          src={selectedImage}
          onClick={handleClick}
          className='rounded-lg w-full sm:w-full md:w-3/4 max-sm:h-3/4 max-sm:rounded-none'
          alt={images[1].alt}
        />
      )}
      <div className='grid grid-cols-4 sm:grid-cols-4 sm:grid-rows-1 md:grid-cols-1 md:grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-3 pt-4 w-full sm:w-full md:w-1/6 lg:w-full'>
        {images.map((image, imageIndex) => {
          return (
            <button key={imageIndex} className='focus:opacity-60'>
              <img
                className='rounded-md hover:opacity-70'
                src={`/images/${image.thumbnail}`}
                alt={`${imageIndex + 1}`}
                onClick={() => {
                  fullSizeClick(image.fullSize);
                  setCurrentIndex(imageIndex);
                }}
              />
            </button>
          );
        })}
      </div>
      <div
        onClick={handleOverlayClick}
        style={{ display: isLightbox ? 'flex' : 'none' }}
        className='flex flex-col items-center justify-center group-hover:block fixed inset-0 bg-black bg-opacity-50 max-sm:justify-start'
      >
        <div className='relative flex flex-col items-end'>
          <BsArrowDownShort
            onClick={prevImage}
            className='hover:opacity-80 cursor-pointer rounded-full w-fit h-[44px] absolute -left-5 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:left-0 rotate-90 bg-gray-300'
          />
          <BsArrowDownShort
            onClick={nextImage}
            className='hover:opacity-80 cursor-pointer bg-gray-300 rounded-full w-fit h-[44px] absolute -right-5 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:right-0 -rotate-90'
          />
          <svg
            className=' fill-white active:fill-orange cursor-pointer'
            width='15'
            height='25'
            xmlns='http://www.w3.org/2000/svg'
            onClick={handleClick}
          >
            <path d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z' />
          </svg>
          <img
            className='rounded-lg max-sm:mt-12 max-sm:h-2/3'
            src={images[currentIndex].fullSize}
            alt={`${currentIndex + 1}`}
            width={550}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
