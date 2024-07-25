import { Flex, Image } from 'antd';
import React from 'react';

interface CartProductCardProps {
  productName: string;
  price: number;
  count: number;
  image: string;
  removeProductFC?: any;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
  productName,
  price,
  count,
  image,
  removeProductFC,
}) => {
  return (
    <div className='shadow-md'>
        <Flex gap='middle' align='start' vertical>
        <div><Image width={71} src={image} /></div>
        <div>
            
        </div>
        </Flex>
    </div>
  );
};

export default CartProductCard;
