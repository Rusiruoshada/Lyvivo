import { Button } from 'antd';
import React, { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Description = () => {
  const price = 125;
  function add() {
    // setCount((prevCount) => prevCount + 1);
    alert('Add another product');
  }

  function minus() {
    // setCount((prevCount) => {
    //   if (prevCount <= 0) {
    //     return 0;
    //   } else {
    //     return prevCount - 1;
    //   }
    // });
    alert('remove product');
  }

  function addToChart() {
    // setTotalPrice(price * count);
    // setRemoveProduct(false);
    alert('Product has been added to cart');
  }

  return (
    <div className='w-1/2 max-lg:w-4/5'>
      <h2 className='text-orange font-bold text-sm'>SNEAKER COMPANY</h2>
      <h1 className='text-5xl mt-4 mb-8 max-sm:text-3xl'>
        Fall Limited Edition Sneakers
      </h1>
      <p>
        These low-profile sneakers are you perfect casual wear companion.
        Featuring a durable rubber outer sole. {`They'll`} withstand everything
        the weather can offer.
      </p>
      <div className='flex flex-col items-start gap-4 mt-4 mb-5 max-sm:flex-row max-sm:justify-between max-sm:mb-7 max-sm:items-center'>
        <div className='flex items-center gap-4'>
          <span className='font-bold text-4xl'>$125.00</span>
          <span className='text-orange bg-pale-orange-500 py-1 px-2 rounded-sm'>
            50%
          </span>
        </div>
        <p className='line-through font-bold'>$250.00</p>
      </div>

      <div className='flex items-center gap-5 max-lg:flex-col max-lg:items-start max-sm:clear-right'>
        <div
          className='flex items-center justify-between px-3 py-3 rounded-lg w-1/2 max-sm:w-full gap-2'
          style={{ backgroundColor: '#00000011' }}
        >
          <FaMinus className='cursor-pointer w-4 text-3xl' onClick={minus} />

          <div className='font-bold text-text-md'>{1}</div>

          <FaPlus className='cursor-pointer w-4 text-3xl' onClick={add} />
        </div>
        <Button
          onClick={addToChart}
          className='hover:opacity-70 flex items-center justify-center gap-1 !bg-[var(--primaryColor)] w-full py-4 rounded-lg max-sm:w-full'
          icon={<BsCart2 className='text-white' />}
          style={{ backgroundColor: 'var(--primaryColor)' }}
          size='large'
        >
          <span className='text-white font-bold'>Add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default Description;
