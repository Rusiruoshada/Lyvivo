import React from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import categories from '../../HomeShopByCategory/exportCategoryObject.tsx';
import Carousel from 'react-multi-carousel';
import responsive from './responsive.ts';
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from 'react-redux';
import { cartProductAction } from '../../../store/slices/cartProductSlice.ts';


interface HomepageProductProps {
  productTitle: string;
  onClickCard: any;
}

const cardTitle: string = 'hello kitty';
const cardDescription: string = '(Inclusive of all taxes)';
const cardPrice: string = parseFloat('32.00').toFixed(2);
const badgeRibbonText: string = 'In Stock';
const badgeColor: string = 'var(--secondaryColor)';
const saving: string = 'Save Rs.120.00';


const HomepageProduct: React.FC <HomepageProductProps> = ({ productTitle,  }) => {

const dispatch = useDispatch();

const onClickCard = (id: string) => {
  console.log(id)
  dispatch(cartProductAction.addProduct({               
    cartProducts: id,
    productCount: 1,
  }))
}

  return (
      <div className="parent">
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
          {[1,2,3,4,5].map((imageUrl, index) => (
            <ItemCard
              cardTitle={cardTitle}
              cardDescription={cardDescription}
              cardPrice={cardPrice}
              badgeRibbonText={badgeRibbonText}
              badgeColor={badgeColor}
              saving={saving}
              categories={categories}
              key={index}
              onClickFunction={onClickCard}
              id={cardTitle+index.toString()}
            />
          ))}
              
        </Carousel>
      </div>
  );
};

export default HomepageProduct;
