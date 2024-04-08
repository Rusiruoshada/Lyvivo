import React from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import { useDragScroll } from '../../../hooks/useDragScroll.ts';
import categories from '../../HomeShopByCategory/exportCategoryObject.tsx';
import Carousel from 'react-multi-carousel';
import responsive from './responsive.ts';

interface HomepageProductProps {
  productTitle: string;
}

const cardTitle: string = 'hello kitty';
const cardDescription: string = '(Inclusive of all taxes)';
const cardPrice: string = parseFloat('32.00').toFixed(2);
const badgeRibbonText: string = 'In Stock';
const badgeColor: string = 'var(--secondaryColor)';
const saving: string = 'Save Rs.120.00';


const HomepageProduct: React.FC<HomepageProductProps> = ({ productTitle }) => {
  const [ref] = useDragScroll();

  return (
    // <div className='product-carousel overflow-hidden relative  py-6 '>
    //   <h4>{productTitle}</h4>
    //   <div
    //     className='product-container grid grid-flow-col scroll-smooth transition-transform ease-out duration-500 justify-between overflow-x-scroll '
    //     ref={ref}
    //   >
    //     <ItemCard
    //       cardTitle={cardTitle}
    //       cardDescription={cardDescription}
    //       cardPrice={cardPrice}
    //       badgeRibbonText={badgeRibbonText}
    //       badgeColor={badgeColor}
    //       saving={saving}
    //       categories={categories}
    //     />
    //     <ItemCard
    //       cardTitle={cardTitle}
    //       cardDescription={cardDescription}
    //       cardPrice={cardPrice}
    //       badgeRibbonText={badgeRibbonText}
    //       badgeColor={badgeColor}
    //       saving={saving}
    //       categories={categories}
    //     />
    //     <ItemCard
    //       cardTitle={cardTitle}
    //       cardDescription={cardDescription}
    //       cardPrice={cardPrice}
    //       badgeRibbonText={badgeRibbonText}
    //       badgeColor={badgeColor}
    //       saving={saving}
    //       categories={categories}
    //     />
    //     <ItemCard
    //       cardTitle={cardTitle}
    //       cardDescription={cardDescription}
    //       cardPrice={cardPrice}
    //       badgeRibbonText={badgeRibbonText}
    //       badgeColor={badgeColor}
    //       saving={saving}
    //       categories={categories}
    //     />
    //     <ItemCard
    //       cardTitle={cardTitle}
    //       cardDescription={cardDescription}
    //       cardPrice={cardPrice}
    //       badgeRibbonText={badgeRibbonText}
    //       badgeColor={badgeColor}
    //       saving={saving}
    //       categories={categories}
    //     />

    //   </div>
    // </div>
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {[1,2,3,4,5].map((imageUrl, index) => (
            <ItemCard 
              cardTitle={cardTitle}
              cardDescription={cardDescription}
              cardPrice={cardPrice}
              badgeRibbonText={badgeRibbonText}
              key={index} 
              categories={categories} 
            />
          )
        )}
      </Carousel>
    </div>
  );
};

export default HomepageProduct;
