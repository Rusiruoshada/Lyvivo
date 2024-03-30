import { Typography } from 'antd';
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const { Text, Title } = Typography;
const links = [
  {
    key: '1',
    label: 'Quick Links',
    children: [
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500hover:translate-x-1 ease-in-out duration-500 ' >Home</Text>,
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Catalogue & Deals</Text>,
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Track my order</Text>,
    ],
  },
  {
    key: '2',
    label: 'Categories',
    children: [
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Grocery</Text>,
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Pharmacy</Text>,
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Food</Text>,
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Electronics</Text>,
    ],
  },
  {
    key: '3',
    label: 'Quick Links',
    children: [
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Privacy Policy</Text>,
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >FAQ</Text>,
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Terms and Conditions</Text>,
    ],
  },
  {
    key: '4',
    label: 'Customer Service',
    children: [
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Contact us</Text>,
      <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >About us</Text>,
    ],
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