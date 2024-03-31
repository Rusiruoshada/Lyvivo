import { Typography } from 'antd';
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import links from './middleFooterLinks.tsx';

const { Title } = Typography;

const MiddleFooter = () => {
  return (
    <div className='grid grid-cols-1 sm:!grid-cols-1 md:!grid-cols-1 lg:!grid-cols-3 mt-4 gap-2'>
      <div className='flex flex-col sm:w-full md:w-full lg:w-[90%] lg:col-span-1'>
        <div>
          <p className='text-[14px] sm:!text-center md:!text-center lg:!text-start'>
            Jaykay Marketing Services Pvt Ltd. No:148, Vauxhall Street, Colombo
            2, Sri Lanka.
          </p>
        </div>
        <div>
          <div className='flex flex-row gap-2 items-center  text-[var(--primaryColor)] font-bold text-1xl sm:justify-center md:justify-center lg:justify-start'>
            <FaPhone className='rotate-90 text-[var(--primaryColor)]' /> +94 11 230 3500
          </div>
          <p className='text-[14px] sm:!text-center md:!text-center lg:!text-start'>(Daily operating hours 8.00a.m to 8.00p.m)</p>
        </div>
      </div>
      <div className='col-span-2'>
        <div className='grid grid-cols-4'>
          {links.map((link) => (
            <div className='flex flex-col' key={link.key}>
              <Title level={5} className='!text-[var(--primaryColor)]'>
                {link.label}
              </Title>
              <div className='flex flex-col'>{link.children}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
