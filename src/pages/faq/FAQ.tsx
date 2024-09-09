import { Breadcrumb, Collapse } from 'antd';
import React from 'react';
import { itemsOnlineOrderAndDeliveryRelated } from './faqCollapseItems.ts';

const FAQ = () => {
  return (
    <>
      <div className='flex relative'>
        <Breadcrumb className='absolute top-14 text-white' />
        <img
          src='images/about page/about page banner.png'
          alt='FAQ page banner'
          className='h-52  '
        />
        <h1 className='absolute mx-10 font-bold text-2xl top-16 text-white'>
          Here to help
        </h1>
      </div>
      <div className='mx-10 my-5'>
        <h1 className='text-2xl'>
          Frequently <b>asked questions</b>
        </h1>
        <div className='mt-3'>
          <h2>Online order & delivery related</h2>
          <Collapse items={itemsOnlineOrderAndDeliveryRelated} />
        </div>
      </div>
    </>
  );
};

export default FAQ;
