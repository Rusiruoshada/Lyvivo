import React from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import { useDragScroll } from '../../../hooks/useDragScroll.ts';
import categories from '../../HomeShopByCategory/exportCategoryObject.tsx';

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
    <div className='product-carousel overflow-hidden relative  py-6 px-10 '>
      <h4>{productTitle}</h4>
      <div
        className='product-container grid grid-flow-col scroll-smooth transition-transform ease-out duration-500 justify-between overflow-x-scroll '
        ref={ref}
      >
        <ItemCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          cardPrice={cardPrice}
          badgeRibbonText={badgeRibbonText}
          badgeColor={badgeColor}
          saving={saving}
          categories={categories}
        />
        <ItemCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          cardPrice={cardPrice}
          badgeRibbonText={badgeRibbonText}
          badgeColor={badgeColor}
          saving={saving}
          categories={categories}
        />
        <ItemCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          cardPrice={cardPrice}
          badgeRibbonText={badgeRibbonText}
          badgeColor={badgeColor}
          saving={saving}
          categories={categories}
        />
        <ItemCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          cardPrice={cardPrice}
          badgeRibbonText={badgeRibbonText}
          badgeColor={badgeColor}
          saving={saving}
          categories={categories}
        />
        <ItemCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          cardPrice={cardPrice}
          badgeRibbonText={badgeRibbonText}
          badgeColor={badgeColor}
          saving={saving}
          categories={categories}
        />

      </div>
    </div>
  );
};

export default HomepageProduct;
