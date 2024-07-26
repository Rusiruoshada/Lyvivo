import React from 'react';
import type { DrawerProps } from 'antd';
import { Button, Drawer, Space } from 'antd';
import CartProductCard from './CartProductCard.tsx';

interface CartDrawerProps {
  openCart: boolean;
  onOpenCart:any;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ openCart,onOpenCart }) => {

  const cartProducts = [
    {
      image:'/images/Pic923056.jpg',
      productName: 'Kodiak Cakes Power Cakes Pancake & Waffle Mix',
      productTotalPrice:100.99,
      count:10
    },
  ]

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
        {
          cartProducts.map((productDetails:any) =>(
            <CartProductCard key={productDetails.productName} productName={productDetails.productName} price={productDetails.productTotalPrice} count={productDetails.count} image={productDetails.image} />
          ))
        }
      </Drawer>
    </div>
  );
};

export default CartDrawer;
