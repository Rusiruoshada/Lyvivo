import { Typography } from 'antd';
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import links from './middleFooterLinks.tsx';

const { Title } = Typography;


const MiddleFooter = () => {
  return (
    <div className='grid grid-cols-3 mt-4 gap-2'>
      <div className='flex flex-col col-span-1'>
        <div>
          <p>
            Jaykay Marketing Services Pvt Ltd. No:148, Vauxhall Street, Colombo
            2, Sri Lanka.
          </p>
        </div>
        <div>
          <div className='flex flex-row gap-2 items-center'>
            <FaPhone className='rotate-90' /> +94 11 230 3500
          </div>
          <p>(Daily operating hours 8.00a.m to 8.00p.m)</p>
        </div>
      </div>
      <div className='col-span-2'>
        <div className='grid grid-cols-4'>
          {links.map(link =>(<div className='flex flex-col' key={link.key}>
            <Title level={5} className='text-white'>{link.label}</Title>
            <div className='flex flex-col'>
              {link.children}
            </div>
          </div>))}
          
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;