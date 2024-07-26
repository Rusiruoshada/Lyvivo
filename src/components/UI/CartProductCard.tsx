import { Flex, Image } from 'antd';
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from "react-icons/io";

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
    <div className='shadow-md p-2'>
      <Flex gap='middle' align='start' className='gap-1' >
        <div>
          <Image width={71} src={image} />
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <h6>{productName}</h6>
            <p>Rs. {price}</p>
          </div>
          <div>
            <FaMinus
                className='cursor-pointer w-4 text-3xl'
                // onClick={minus}
            />
            
            <div className='font-bold text-md'>{count}</div>

            <FaPlus className='cursor-pointer w-4 text-3xl' 
            // onClick={add}
             />
          </div>
          <div className='flex justify-center align-middle'><IoIosCloseCircleOutline className='flex justify-center align-middle text-2xl' /></div>
        </div>
      </Flex>
    </div>
  );
};

export default CartProductCard;
