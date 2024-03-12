import React from 'react';
import { Button, Card,Badge } from 'antd';
import { BsCart2 } from 'react-icons/bs';


const { Meta } = Card;

const ItemCard: React.FC = () => {

    const cardTitle = 'hello kitty'

    return (  
  <Card
    style={{ width: 300 }}
    cover={<img className='aspect-square' alt='example' src='./images/Pic923056.jpg' />}
    className='scale-75 hover:shadow-lg hover:scale-[0.76] border'
    actions={[
      <Button
        style={{
          width: '90%',
          color: 'var(--primaryColor)',
          borderColor: 'var(--primaryColor)',
        }}
        className='hover:!bg-[var(--primaryColor)] hover:!text-white text-2xl flex items-center justify-center'
        size='large'
        icon=<BsCart2 />
      >
        Add to Cart
      </Button>,
    ]}
  >
    <Badge status='success' className='border-2 px-2 rounded aspect-square mb-2' size='default' />

    <Meta title=<h4 className='font-medium  capitalize'>{cardTitle}</h4> description='This is the description' />
  </Card>
)};

export default ItemCard;
