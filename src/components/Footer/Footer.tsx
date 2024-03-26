import React from 'react';
import UpperFooter from './UpperFooter.tsx';
import MiddleFooter from './MiddleFooter.tsx';
import BottomFooter from './BottomFooter.tsx';

const Footer: React.FC = () => {

  return (
    <div className='sm:py-5 md:py-10 lg:py-10  sm:px-1 md:px-10 lg:px-10 bg-[--footerBgColor] text-white flex flex-col '>
        <UpperFooter />
        <MiddleFooter />
        <BottomFooter />
    </div>
  );
};

export default Footer;
