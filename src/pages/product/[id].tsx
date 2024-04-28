import React from 'react';
import Images from '../../components/ProductDetails/Image.tsx';
import Description from '../../components/ProductDetails/Description.tsx';

interface ImageType {
  thumbnail: string;
  fullSize: string;
  alt: string;
}

const images: ImageType[] = [
  {
    thumbnail: '/Pic923056.jpg',
    fullSize: '/images/Pic923056.jpg',
    alt: '1',
  },
  {
    thumbnail: '/slide1.png',
    fullSize: '/images/slide1.png',
    alt: '2',
  },
  {
    thumbnail: '/slide2.png',
    fullSize: '/images/slide2.png',
    alt: '3',
  },
  {
    thumbnail: '/slide3.jpg',
    fullSize: '/images/slide3.jpg',
    alt: '4',
  },
];

const SingleProductPage = () => {
  return (
    <div className='flex items-center gap-16 px-10 py-20 max-lg:flex-col max-sm:py-0 max-sm:px-4 mb-10'>
      <Images images={images} />
      <Description
        title={undefined}
        productName='Mangosteen'
        description={undefined}
        originalPrice={250}
        percentage={50}
      />
    </div>
  );
};

export default SingleProductPage;
