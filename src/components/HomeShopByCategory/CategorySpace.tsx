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
    className='my-5 sm:my-5 md:my-20 lg:my-20 p-0 text-center border-none'
  >
    <Row gutter={20} justify='center' className='p-0 gap-3'>
      {categories1.map((categoryItem) => (
        <Col
          className='py-3 sm:py-2 md:p-5 lg:p-10 px-0 scale-100 sm:scale-100 md:scale-75 lg:scale-75'
          xs={10}
          sm={10}
          md={7}
          lg={4}
          key={categoryItem.label}
        >
          <Card.Grid style={gridStyle} className='p-0'>
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
