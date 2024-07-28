import { Button, Input, Space, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { cartProductAction } from '../../store/slices/cartProductSlice.ts';
import openNotification from '../../hooks/notification.ts';

interface DescriptionProps {
  title?: string;
  productName: string;
  description?: string;
  originalPrice: number;
  savingPrice?: number;
  percentage?: number;
  size?: number;
  id: any;
}

const Description: React.FC<DescriptionProps> = ({
  title = undefined,
  productName,
  description = undefined,
  originalPrice,
  savingPrice = 0,
  percentage = 0,
  size = undefined,
  id,
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [clickAdd, setClickAdd] = useState({
    click: false,
    text: 'Add to Cart',
  });

  useEffect(() => {
    // Dispatch savingPrice to the store when component mounts
    dispatch(
      cartProductAction.totalPrice({ totalPriceForProduct: savingPrice })
    );
  }, [dispatch, savingPrice]);

  const cartProductCount = useSelector(
    (state: any) => state.cartShow.totalPriceForProduct
  );

  const checkIFProductAddToCart = useSelector(
    (state: any) => state.cartShow.cartProducts
  );

  const filterCartProduct = checkIFProductAddToCart
    .filter((productId: any) => productId === id)
    .some((productId: any) => productId === id);

  const cartProductCountFixed = parseFloat(cartProductCount.toFixed(2));

  const add = () => {
    setCount((prevCount) => prevCount + 1);
    setClickAdd({ click: false, text: `Added new ${productName} to Cart` });
    dispatch(
      cartProductAction.totalPrice({
        cartProductCount: 1,
        totalPriceForProduct: savingPrice + savingPrice * count,
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
        setClickAdd({ click: false, text: `Remove ${productName} from Cart` });

        openNotification({type:'success', description:`${productName} remove from cart`, message:'Successful',role:'status', className:'[&<div]:!top-10'});

      } else {
        openNotification({type:'error', description:`${productName} not in cart to remove it.`, message:'Error',role:'alert'});
      }
    } else {
      dispatch(
        cartProductAction.totalPrice({
          cartProductCount: -1,
          totalPriceForProduct: savingPrice * count - savingPrice,
        })
      );
      setClickAdd({ click: false, text: `Remove one ${productName} in Cart` });
    }
  };

  const checkWhatsWrong = useSelector(
    (state: any) => state.cartShow
  );
  
  console.log(checkWhatsWrong)

  const addToChart = () => {
    
    openNotification({type:'success', description:`${count===1? '': count} ${productName} Add to cart`, message:'Successful',role:'status'});

    setClickAdd({ click: true, text: `Added ${productName} to Cart` });
    if (filterCartProduct) {
      dispatch(
        cartProductAction.addProduct({
          cartProducts: id,
          productCount: 0,
        })
      );
      dispatch(
        cartProductAction.getAllDetails({
          cartProductDetails: {
            price: savingPrice * count,
            addItemsCount: count,
            size: size,
            id: id,
          },
        })
      );
    } else {
      dispatch(
        cartProductAction.addProduct({
          cartProducts: id,
          productCount: 1,
        })
      );
      dispatch(
        cartProductAction.getAllDetails({
          cartProductDetails: {
            title: title,
            productName: productName,
            description: description,
            price: savingPrice * count,
            // percentage ,
            size: size,
            addItemsCount: count,
            id: id,
          },
        })
      );
    }
  };

  return (
    <div className='w-full sm:w-full md:w-4/5  lg:w-1/2 lg:pr-10'>
      {title && (
        <h2 className='text-[var(--secondaryColor)] font-bold text-sm'>
          {title}
        </h2>
      )}
      {/* use only for electronic d */}
      <h1 className='text-5xl mt-4 mb-8 max-sm:text-3xl'>{productName}</h1>

      {description && <p>{description}</p>}
      <div className='flex flex-col items-start gap-1 mt-4 mb-5 max-sm:flex-row max-sm:justify-between max-sm:mb-7 max-sm:items-center'>
        <div className='flex items-center gap-4'>
          <span className='font-bold text-4xl'>
            Rs.
            {savingPrice > 0 ? cartProductCountFixed : originalPrice}
          </span>
          {percentage > 0 && (
            <span
              className='py-1 px-2 rounded-md'
              style={{ backgroundColor: '#00000011', color: 'black' }}
            >
              {percentage}%
            </span>
          )}
        </div>
        {originalPrice && (
          <p className='line-through font-bold text-gray-400'>
            Rs. {originalPrice * count}
          </p>
        )}
      </div>
      <div className='flex items-center justify-center gap-5 flex-col sm:flex-col md:flex-row lg:flex-row lg:items-center max-sm:clear-right'>
        {size === undefined ? (
          <div
            className='flex items-center justify-between px-3 py-2 rounded-lg w-1/2 max-sm:w-full gap-2'
            style={{ backgroundColor: '#00000011' }}
          >
            {count !== 1 ? (
              <FaMinus
                className='cursor-pointer w-4 text-3xl'
                onClick={minus}
              />
            ) : (
              <FaTrash
                className='cursor-pointer w-4 text-3xl'
                onClick={minus}
              />
            )}

            <div className='font-bold text-md'>{count}</div>

            <FaPlus className='cursor-pointer w-4 text-3xl' onClick={add} />
          </div>
        ) : (
          <Space.Compact>
            <Tooltip>
              <Input
                type='submit'
                value={`${size >= 1000 ? size / 1000 : size} ${
                  size >= 1000 ? 'Kg' : 'g'
                }`}
                onClick={() => {
                  alert(size);
                }}
                className='items-center justify-between px-3 py-2 rounded-lg w-full max-sm:w-full gap-2'
              />
            </Tooltip>
          </Space.Compact>
        )}
        <Button
          onClick={addToChart}
          className='w-hover:opacity-70 flex items-center justify-center !bg-[var(--primaryColor)] w-full  rounded-lg max-sm:w-full border-0 [&>div]:w-full disabled:!bg-slate-300'
          icon={<BsCart2 className='text-white font-bold ' />}
          style={{ backgroundColor: 'var(--primaryColor)', border: 'none' }}
          size='large'
          disabled={clickAdd.click}
        >
          <span className='text-white font-bold'>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default Description;
