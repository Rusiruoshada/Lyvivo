import React from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import categories from '../../HomeShopByCategory/exportCategoryObject.tsx';
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
const saving: string = 'Save Rs.120.00';

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

  console.log(productQuery.data);

  if (productQuery.isLoading) return <h1>Loading...</h1>;
  if (productQuery.isError) return <h1>Error loading data...</h1>;

  const onClickCard = (id: string) => {
    console.log(id);
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
        {productQuery.data.map((product: any, index) => (
          <ItemCard
            cardTitle={product.productName}
            cardDescription={cardDescription}
            cardPrice={product.regularPrice}
            badgeRibbonText={badgeRibbonText}
            badgeColor={badgeColor}
            saving={saving}
            categories={categories}
            key={index}
            onClickFunction={onClickCard}
            id={product._id}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HomepageProduct;
