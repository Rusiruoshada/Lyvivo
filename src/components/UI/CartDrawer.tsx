import React from 'react';
import type { DrawerProps } from 'antd';
import { Button, Divider, Drawer, Space } from 'antd';
import CartProductCard from './CartProductCard.tsx';

interface CartDrawerProps {
  openCart: boolean;
  onOpenCart: any;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ openCart, onOpenCart }) => {
  const cartProducts = [
    {
      image: '/images/Pic923056.jpg',
      productName: 'Kodiak Cakes Power Cakes Pancake & Waffle Mix',
      productTotalPrice: 100.99,
      count: 10,
    },
    {
      image: '/images/Pic923056.jpg',
      productName: 'Kodiak Cakes Power Cakes Pancake & Waffle Mix',
      productTotalPrice: 100.99,
      count: 10,
    },
    {
      image: '/images/Pic923056.jpg',
      productName: 'Kodiak Cakes Power Cakes Pancake & Waffle Mix',
      productTotalPrice: 100.99,
      count: 10,
    },
    {
      image: '/images/Pic923056.jpg',
      productName: 'Kodiak Cakes Power Cakes Pancake & Waffle Mix',
      productTotalPrice: 100.99,
      count: 10,
    },
    {
      image: '/images/Pic923056.jpg',
      productName: 'Kodiak Cakes Power Cakes Pancake & Waffle Mix',
      productTotalPrice: 100.99,
      count: 10,
    },
    {
      image: '/images/Pic923056.jpg',
      productName: 'Kodiak Cakes Power Cakes Pancake & Waffle Mix',
      productTotalPrice: 100.99,
      count: 10,
    },
  ];

  return (
    <div className='z-[102]'>
      <Drawer
        title='Basic Drawer'
        placement={'right'}
        closable={true}
        onClose={onOpenCart}
        open={openCart}
        key={'right'}
        className='p-0 [&>div]:!p-2'
      >
        <div className='!p-0 overflow-y-scroll mb-32'>
        {cartProducts.map((productDetails: any) => (
          <CartProductCard
            key={productDetails.productName}
            productName={productDetails.productName}
            price={productDetails.productTotalPrice}
            count={productDetails.count}
            image={productDetails.image}
          />
        ))}
        </div>
        <div className='h-[120px] absolute bottom-0 right-0 left-0 top-auto bg-white !p-2 shadow-lg rounded-tl-3xl rounded-tr-3xl'>
          
          <div className='flex justify-between mt-3 mb-2'>
              <span><h5>Total Price: </h5></span>
              <span><h4>Rs. 1000.99</h4></span>
          </div>
          <Button type='primary' className='bg-black w-full' onClick={()=>{alert('click check out')}}>Check Out</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
