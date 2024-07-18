import React from 'react';
import {useParams} from 'react-router-dom';
import Images from '../../components/ProductDetails/Image.tsx';
import Description from '../../components/ProductDetails/Description.tsx';
import ProductSpace from '../../components/ProductArea/ProductSpace.tsx';
import HomepageProduct from '../../components/ProductArea/HomePageProductCategoryArea/HomepageProduct.tsx';
import Path from '../../components/Breadcrumb/Breadcrumb.tsx';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



interface ImageType {
  thumbnail: any;
  fullSize: any;
  alt: string;
}

const productCarousel:any = [
  <HomepageProduct productTitle='You may also like' />,
];

const SingleProductPage = () => {
  let { id } = useParams<{ id: string }>();

  const showProductQuery = useQuery({
    queryKey: ['getSelectProduct'],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      const data = response.data;
      return data;
    },
  });


  if (showProductQuery.isLoading) return <h1>Loading...</h1>;
  if (showProductQuery.isError) return <h1>Error loading data...</h1>;

  const showProductDetails = showProductQuery.data;

  const {productName, category, weight, regularPrice,discountPrice, description, image :imageUrl} = showProductDetails;

  const imageUrlLink = imageUrl? imageUrl: ''

  const images: ImageType[] = [
    {
      thumbnail: {imageUrlLink},
      fullSize: {imageUrlLink},
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

  const discountPercentage = parseFloat((((regularPrice - discountPrice)/regularPrice ) * 100).toFixed(2)) ;
         
  
  return (
    <>
    <Path currentPath={productName} />
    <div className='flex items-center  sm:gap-1 md:gap-2 lg:gap-16  px-10 py-20 max-lg:flex-col max-sm:py-0 max-sm:px-4 mb-10'>
      <Images images={images} />
      <Description
        title={category}
        productName={productName}
        description={description}
        originalPrice={regularPrice}
        percentage={discountPercentage}
        savingPrice={discountPrice}
        size={weight}
        id={id}
      />
    </div>
    <div>
      <ProductSpace element={productCarousel} />
    </div>
    </>
  );
};

export default SingleProductPage;
