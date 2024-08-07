import { Flex, Image } from 'antd';
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { cartProductAction } from '../../store/slices/cartProductSlice.ts';

interface CartProductCardProps {
  productName: string;
  price: number;
  count: number;
  image: string;
  removeProductFC?: any;
  id:string;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
  productName,
  price,
  count: productCount,
  image,
  removeProductFC,
  id
}) => {
  
  const dispatch = useDispatch();
  const [count, setCount] = useState(productCount);
  const isMinusShow: boolean = count === 1;
  
  const checkIFProductAddToCart = useSelector(
    (state: any) => state.cartShow.cartProducts
  );
    
  
  const add = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch(
      cartProductAction.totalPrice({
        cartProductCount: 1,
        totalPriceForProduct: price * count,
      })
    );
  };


  const minus = () => {
    setCount((prevCount) => {
      if (prevCount <= 1) {
        return 1;
      } else {
        return prevCount - 1;
      }
    });
    if (count <= 1) {
      if (checkIFProductAddToCart.length !== 0) {
        // const filterAndRemoveProduct = checkIFProductAddToCart.filter(
        //   (productId: any) => productId !== id
        // );
        dispatch(
          cartProductAction.totalPrice({
            cartProductCount: 0,
            totalPriceForProduct: price,
          })
        );
        
      } else {
      }
    } else {
      dispatch(
        cartProductAction.totalPrice({
          cartProductCount: -1,
          totalPriceForProduct: price * count - price,
        })
      );
    }
  };

  return (
    <div className='shadow-md p-2'>
      <Flex gap='middle' align='start' className='gap-1'>
        <div>
          <Image width={71} src={image} />
        </div>
        <div className='flex flex-row w-full justify-between'>
          <div className='flex flex-col'>
            <h6>{productName}</h6>
            <p>Rs. {price}</p>
          </div>
          <div className='flex flex-row'>
          <div className='mr-2 ml-2 shadow-md pr-2 pl-2 pt-0 pb-0'>
            <FaPlus className='cursor-pointer w-4 text-3xl' onClick={add} />

            <div className='font-bold text-md text-center'>{count}</div>

            <FaMinus
              className={`cursor-pointer w-4 text-3xl ${
                isMinusShow ? 'text-gray-500' : 'text-black'
              }`}
              onClick={minus}
            />
          </div>
          <div className='flex justify-center align-middle'>
            <IoIosCloseCircleOutline className='flex justify-center align-middle text-2xl  m-auto text-gray-500 hover:text-red-400' cursor='pointer' onClick={()=>removeProductFC(id)} />
          </div>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default CartProductCard;
