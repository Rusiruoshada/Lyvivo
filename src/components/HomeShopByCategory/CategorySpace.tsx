import React from 'react';
import { Card } from 'antd';
import categories from './exportCategoryObject.tsx';
import CategoryCard from './CategoryCards.tsx';

const gridStyle: React.CSSProperties = {
  width: '15%',
  textAlign: 'center',
};

const CategorySpace: React.FC = () => (
  <Card
    title={
      <h3 className='mb-10 font-bold text-[var(--primaryColor)]'>
        Shop by Category
      </h3>
    }
    className='my-10 p-10 text-center border-none'
  >
    {categories.map((categoryItem) => (
      <Card.Grid style={gridStyle} className='p-0 m-auto'>
        <CategoryCard
          category={categories}
        />
      </Card.Grid >
    ))}
  </Card>
);

export default CategorySpace;
