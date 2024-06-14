import React, {useState } from 'react';
import {Badge, Button, Space } from 'antd';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';


interface CartBadgeProps {
  onOpenCart?: any
}

const CartBadge: React.FC<CartBadgeProps> = ({onOpenCart}) => {

  const countProduct = useSelector((state:any) => state.cartShow.productCount)
  const countProduct1 = useSelector((state:any) => state.cartShow.cartProducts)

  console.log(countProduct + '' + countProduct1)

  return (
    <Space direction="vertical" onClick={onOpenCart} >
      <Space size="large">
        <Badge count={countProduct} color='var(--primaryColor)'>
            <BsCart3 className='text-[var(--primaryColor)] font-bold text-2xl' />
        </Badge>
      </Space>
    </Space>
  );
};

export default CartBadge;