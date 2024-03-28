import { Typography } from 'antd';
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const { Text, Title } = Typography;
const links = [
  { 
    key: '1', 
    label: 'Quick Links', 
    children: [<Text>Home</Text>, <Text>Catalogue & Deals</Text>, <Text></Text>] 
  },
];

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
          <div className='flex flex-col'>
            <Title level={5}>Quick Links</Title>
            <div className='flex flex-col'>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className='flex flex-col'>
            <Title level={5}>Categories</Title>
            <div className='flex flex-col'>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className='flex flex-col'>
            <Title level={5}>Useful Links</Title>
            <div className='flex flex-col'>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className='flex flex-col'>
            <Title level={5}>Customer Service</Title>
            <div className='flex flex-col'>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
