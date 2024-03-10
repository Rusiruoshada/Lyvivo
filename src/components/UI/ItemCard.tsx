import React from 'react';
import { Button, Card } from 'antd';
import { BsCart2 } from 'react-icons/bs';
const { Meta } = Card;

const ItemCard: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={<img alt='example' src='./images/Pic923056.jpg' />}
    actions={[
      <Button
        style={{
          width: '90%',
          color: 'var(--primaryColor)',
          borderColor: 'var(--primaryColor)',
          
        }}
        className='hover:bg-[var(--primaryColor)] hover:color-white '
        icon=<BsCart2 />
      >
        Add to Cart
      </Button>,
    ]}
  >
    <Meta title='Card title' description='This is the description' />
  </Card>
);

export default ItemCard;
