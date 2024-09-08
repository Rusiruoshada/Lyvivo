import { Breadcrumb, Collapse } from 'antd';
import React from 'react';

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
        <h1 className='absolute mx-10 font-bold text-2xl top-16 text-white'>Here to help</h1>
          </div>
          <div>
          <Collapse items={items} defaultActiveKey={['1']} />
          </div>
    </>
  );
};

export default FAQ;
