import { Flex } from 'antd';
import React from 'react'

interface CartProductCardProps{
    productName: string;
    price: number;
    count: number;
    image: string;
    removeProductFC?: any;
}

const CartProductCard: React.FC<CartProductCardProps> = ({productName, price, count, image, removeProductFC}) => {
  return (
    <Flex gap="middle" align="start" vertical>
        <div></div>
    </Flex>
  )
}

export default CartProductCard;