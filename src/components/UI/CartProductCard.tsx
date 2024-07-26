import { Flex, Image } from 'antd';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { cartProductAction } from '../../store/slices/cartProductSlice.ts';

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
  count : productCount,
  image,
  removeProductFC,
}) => {

  const isMinusShow:boolean = productCount <= 1;

  const dispatch = useDispatch();
  const [count, setCount] = useState(productCount);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch(
      cartProductAction.totalPrice({
        cartProductCount: 1,
        totalPriceForProduct:  price * count,
      })
    );
  };

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
          <div className='mr-2 ml-2 shadow-md pr-2 pl-2 pt-0 pb-0'>
            <FaPlus className='cursor-pointer w-4 text-3xl' 
            onClick={add}
             />
            
            <div className='font-bold text-md'>{count}</div>
             
            <FaMinus
                className={`cursor-pointer w-4 text-3xl ${isMinusShow?'text-gray-500':''}`}
                
                // onClick={minus}
            />
          </div>
          <div className='flex justify-center align-middle'><IoIosCloseCircleOutline className='flex justify-center align-middle text-2xl  m-auto' /></div>
        </div>
      </Flex>
    </div>
  );
};

export default CartProductCard;
