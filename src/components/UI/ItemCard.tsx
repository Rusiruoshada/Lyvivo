import React from 'react';
import { Button, Card, Badge } from 'antd';
import { BsCart2 } from 'react-icons/bs';
import DropDown from './DropDown.tsx';
import categories from '../HomeShopByCategory/exportCategoryObject.tsx';

const { Meta } = Card;

const ItemCard: React.FC = () => {
  const cardTitle: string = 'hello kitty';
  const cardDescription: string = '(Inclusive of all taxes)';
  const cardPrice: string = parseFloat('32.00').toFixed(2);
  const badgeRibbonText: string = 'In Stock';

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Badge.Ribbon text={badgeRibbonText} color='green'>
          <img
            className='aspect-square '
            alt='example'
            src='./images/Pic923056.jpg'
          />
        </Badge.Ribbon>
      }
      className='scale-75 hover:shadow-lg hover:scale-[0.76] border-2'
      actions={[
        <Button
          style={{
            width: '90%',
            color: 'var(--primaryColor)',
            borderColor: 'var(--primaryColor)',
          }}
          className='hover:!bg-[var(--primaryColor)] hover:!text-white text-[18px]'
          size='large'
          icon=<BsCart2 />
        >
          Add to Cart
        </Button>,
      ]}
    >
      <Meta title=<h4 className='font-bold  capitalize'>{cardTitle}</h4> />
      <DropDown
        placeholderName='place'
        categories={categories}
        className='[& >div]:bg-gray-200 w-100'
      />
      <Meta
        title=<h4 className='font-medium  m-0 capitalize'>Rs. {cardPrice}</h4>
        description=<p className='text-[18px]  m-0 capitalize'>
          {cardDescription}
        </p>
      />
    </Card>
  );
};

export default ItemCard;
