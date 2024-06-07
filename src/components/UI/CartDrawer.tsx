import React, { useState } from 'react';
import type { DrawerProps } from 'antd';
import { Button, Drawer, Space } from 'antd';

interface CartDrawerProps{
  openCart: any
}

const CartDrawer: React.FC<CartDrawerProps> = ({openCart}) => {
  
  const [open, setOpen] = useState(false);
  
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={open}
        key={'right'}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default CartDrawer;