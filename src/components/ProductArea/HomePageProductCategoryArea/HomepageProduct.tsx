import React from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import Carousel from 'react-multi-carousel';
import responsive from './responsive.ts';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { cartProductAction } from '../../../store/slices/cartProductSlice.ts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface HomepageProductProps {
  productTitle: string;
  onClickCard?: any;
}


const cardDescription: string = '(Inclusive of all taxes)';
const badgeRibbonText: string = 'In Stock';
const badgeColor: string = 'var(--secondaryColor)';


const HomepageProduct: React.FC<HomepageProductProps> = ({ productTitle }) => {
  const dispatch = useDispatch();

  const productQuery = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:5000/api/homepageProduct');
      const data = response.data;
      return data;
    },
  });

  
  if (productQuery.isLoading) return <h1>Loading...</h1>;
  if (productQuery.isError) return <h1>Error loading data...</h1>;

  const productDetails = productQuery.data; // product details from DB


  
  const onAddToCartClick = (id: string) => {
    dispatch(
      cartProductAction.addProduct({
        cartProducts: id,
        productCount: 1,
      })
    );
    
  };

  return (
    <div className='parent'>
      <h4 className='px-10'>{productTitle}</h4>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={true}
        className='[&>button]:z-50'
      >
        {productDetails?.map((product: any) => {

         const saving = parseFloat((product.regularPrice - product.discountPrice).toFixed(2));

         return (
          <ItemCard
            cardTitle={product.productName}
            cardDescription={cardDescription}
            cardPrice={product.discountPrice? product.discountPrice : product.regularPrice}
            badgeRibbonText={badgeRibbonText}
            badgeColor={badgeColor}
            saving={saving}
            key={product._id}
            onAddToCartClick={onAddToCartClick}
            id={product._id}
            image={product.image}
            weight={product.weight}
          />
        )})}
      </Carousel>
    </div>
  );
};

export default HomepageProduct;
