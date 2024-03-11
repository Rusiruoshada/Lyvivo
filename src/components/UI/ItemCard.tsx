import React from 'react';
import { Button, Card,Badge } from 'antd';
import { BsCart2 } from 'react-icons/bs';


const { Meta } = Card;

const ItemCard: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={<img className='aspect-square' alt='example' src='./images/Pic923056.jpg' />}
    className='scale-75 hover:shadow-md tran'
    actions={[
      <Button
        style={{
          width: '90%',
          color: 'var(--primaryColor)',
          borderColor: 'var(--primaryColor)',
          
        }}
        className='bg-[var(--primaryColor)] text-white text-2xl flex items-center justify-center'
        size='large'
        icon=<BsCart2 />
      >
        Add to Cart
      </Button>,
    ]}
  >
    <Badge status='success' className='border-2 px-2 rounded aspect-square mb-2' size='default' />

    <Meta title='Card title' description='This is the description' />
  </Card>
);

export default ItemCard;
