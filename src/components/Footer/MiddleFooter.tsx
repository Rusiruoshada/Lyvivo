import React from 'react';
import { FaPhone } from 'react-icons/fa';

const MiddleFooter = () => {
  return (
    <div className='grid grid-cols-3'>
      <div className='flex flex-col col-span-1'>
        <div>
          <p>
            Jaykay Marketing Services Pvt Ltd. No:148, Vauxhall Street, Colombo
            2, Sri Lanka.
          </p>
        </div>
        <div>
          <div className='flex flex-row gap-2 items-center'>
            <FaPhone className='rotate-90' /> +94 xx xxx xxxx
          </div>
          <p>(Daily operating hours 8.00a.m to 8.00p.m)</p>
        </div>
      </div>
      <div className='col-span-2'></div>
    </div>
  );
};

export default MiddleFooter;
