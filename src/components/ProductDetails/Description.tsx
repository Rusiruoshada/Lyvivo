import { Button, Input, Space, Tooltip } from 'antd';
import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface DescriptionProps {
  title?: string;
  productName: string;
  description?: string;
  originalPrice: number;
  savingPrice?: number;
  percentage?: number;
  size?: number;
}

const Description: React.FC<DescriptionProps> = ({
  title = undefined,
  productName,
  description = undefined,
  originalPrice,
  savingPrice=0,
  percentage = 0,
  size = undefined ,
}) => {

  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(savingPrice)

  const add = () => {
    setCount((prevCount) => prevCount + 1);
    setTotalPrice(originalPrice * count);
  };
 
  const minus = () => {
    setCount((prevCount) => {
      if (prevCount <= 1) {
        return 1;
      } else {
        return prevCount - 1;
      }
    });
    setTotalPrice(originalPrice * count);
  };

  // alert(totalPrice)

  const addToChart = () => {
    // setTotalPrice(totalPrice * count);
    // setRemoveProduct(false);
    alert('Product has been added to cart');
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
            {savingPrice > 0 ? savingPrice : originalPrice}
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
            Rs. {originalPrice}
          </p>
        )}
      </div>
      <div className='flex items-center justify-center gap-5 flex-col sm:flex-col md:flex-row lg:flex-row lg:items-center max-sm:clear-right'>
        {size === undefined ? (
            <div
            className='flex items-center justify-between px-3 py-2 rounded-lg w-1/2 max-sm:w-full gap-2'
            style={{ backgroundColor: '#00000011' }}
          >
            <FaMinus className='cursor-pointer w-4 text-3xl' onClick={minus} />

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
          className='hover:opacity-70 flex items-center justify-center gap-1 !bg-[var(--primaryColor)] w-full py-4 rounded-lg max-sm:w-full'
          icon={<BsCart2 className='text-white font-bold ' />}
          style={{ backgroundColor: 'var(--primaryColor)', border: 'none' }}
          size='large'
        >
          <span className='text-white font-bold'>Add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default Description;
