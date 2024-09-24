import React, { useState } from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { cartProductAction } from '../../store/slices/cartProductSlice.ts';
import openNotification from '../../hooks/notification.ts';

interface CountDownProps {
  count: number;
  size?: number;
  productName: string;
    price: number;
    originalSavingPrice: number;
  id: string;
}

const CountDown: React.FC<CountDownProps> = ({
  count: productCount,
  size,
  productName,
    price: savingPrice,
    originalSavingPrice,
  id,
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(productCount);

  const checkIFProductAddToCart = useSelector(
    (state: any) => state.cartShow.cartProducts
  );
    
  const add = () => {
    setCount( count + 1);
    dispatch(
      cartProductAction.totalPrice({
        cartProductCount: 1,
        totalPriceForProduct:  originalSavingPrice + originalSavingPrice * count,
      })
    );
    dispatch(
        cartProductAction.getAllDetails({
          cartProductDetails: {
            price: originalSavingPrice * count + originalSavingPrice,
            addItemsCount: count + 1,
            size: size,
            id: id,
          },
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
        const filterAndRemoveProduct = checkIFProductAddToCart.filter(
          (productId: any) => productId !== id
        );

        dispatch(
          cartProductAction.totalPrice({
            cartProductCount: 0, // how many add to cart in one product
            totalPriceForProduct: savingPrice,
          })
        );
            
        dispatch(
          cartProductAction.addProduct({
            cartProducts: filterAndRemoveProduct,
            productCount: -1, // how many products in cart
          })
        );
            
        dispatch(
          cartProductAction.removeItems({
            removingProductId: id,
          })
        );


        openNotification({
          type: 'success',
          description: `${productName} remove from cart`,
          message: 'Successful',
          role: 'status',
          className: '[&<div]:!top-10',
        });
      } else {
        openNotification({
          type: 'error',
          description: `${productName} not in cart to remove it.`,
          message: 'Error',
          role: 'alert',
        });
      }
    } else {
      dispatch(
        cartProductAction.totalPrice({
          cartProductCount: -1,
          totalPriceForProduct: originalSavingPrice * count - originalSavingPrice,
        })
      );
      dispatch(
        cartProductAction.getAllDetails({
          cartProductDetails: {
            price: originalSavingPrice * count - originalSavingPrice,
            addItemsCount: count - 1,
            size: size,
            id: id,
          },
        })
      );
    }
  };

  return (
    <div className='flex flex-col gap-1 items-center justify-center'>
      {size ? (
        <FaTrash onClick={minus} />
      ) : (
        <>
          <div
            className='rounded-md shadow-md aspect-square p-1 hover:scale-90'
            onClick={add}
          >
            <FaPlus  />
          </div>
          <p className='!text-gray-500'>{count}</p>
          <div
            className='rounded-md shadow-md aspect-square p-1 hover:scale-90'
            onClick={minus}
          >
            {count !== 1 ? <FaMinus /> : <FaTrash />}
          </div>
        </>
      )}
    </div>
  );
};

export default CountDown;
