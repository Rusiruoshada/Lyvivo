import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  objectFit:'fill',
  width:'100vw'
};

interface image {
  path: string;
  alt: string;
}

const carouselImages: image[] = [
  { path: '/images/slide1.png', alt: 'slide1' },
  { path: '/images/slide2.png', alt: 'slide2' },
  { path: '/images/slide3.jpg', alt: 'slide3' },
  { path: '/images/slide4.jpg', alt: 'slide4' },
  { path: '/images/slide5.jpg', alt: 'slide5' },
];

const ImageSlider: React.FC = () => (
  <Carousel autoplay>
    {carouselImages.map((image, index) => (
      <div style={contentStyle}  key={index}>
        <img style={contentStyle} src={image.path} alt={image.alt} />
      </div>
    ))}
  </Carousel>
);

export default ImageSlider;
