import React from 'react';
import HomepageProduct from './HomePageProductCategoryArea/HomepageProduct.tsx';

const ProductSpace:React.FC = () => {
  return (
    <div>
      <HomepageProduct productTitle='Best Savings' />
      <HomepageProduct productTitle='Groceries' />
      <HomepageProduct productTitle='Lyvivo Products' />
    </div>
  );
};

export default ProductSpace;
