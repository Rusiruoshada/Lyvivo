import React from 'react';
import type { DrawerProps } from 'antd';
import { Button, Drawer, Space } from 'antd';

interface CartDrawerProps {
  openCart: boolean;
  onOpenCart:any;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ openCart,onOpenCart }) => {


  return (
    <div className='z-[1021]'>
      <Drawer
        title='Basic Drawer'
        placement={'right'}
        closable={true}
        onClose={onOpenCart}
        open={openCart}
        key={'right'}
        
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
