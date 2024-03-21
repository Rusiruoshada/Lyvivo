import React from 'react';
import { Card, Col, Row } from 'antd';
import categories1 from './exportCategoryObject.tsx';
import CategoryCard from './CategoryCards.tsx';

const gridStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
};


const CategorySpace: React.FC = () => (
  <Card
    title={
      <h3 className='mb-3 sm:mb-3 md:mb-10 font-bold text-[var(--primaryColor)]'>
        Shop by Category
      </h3>
    }
    className='mt-20 sm:mt-5 md:mt-20 lg:mt-20 p-0 text-center'
  >
    <Row gutter={20} justify='center' className='p-0 gap-3'>
      {categories1.map((categoryItem) => (
        <Col
          className='py-3 sm:py-2 md:p-5 lg:p-10 px-0 scale-100 sm:scale-100 md:scale-75 lg:scale-75'
          xs={6}
          sm={4}
          md={4}
          lg={4}
          key={categoryItem.label}
        >
          <Card.Grid style={gridStyle} className='p-0 h-44 items-center flex shadow-none'>
            <CategoryCard
              categoryName={categoryItem.value}
              categoryImg={categoryItem.imgPath}
              key={categoryItem.value}
            />
          </Card.Grid>
        </Col>
      ))}
    </Row>
  </Card>
);

export default CategorySpace;
