import { Typography } from "antd";
import React from "react";

interface MiddleFooterLinks {
  key: string;
  label: string;
  children: React.JSX.Element;
}

const { Text } = Typography;

const links:MiddleFooterLinks[] = [
    {
      key: '1',
      label: 'Quick Links',
      children: <div className='flex flex-col'>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500 '>Home</Text>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Catalogue & Deals</Text>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Track my order</Text>
      </div>
    },
    {
      key: '2',
      label: 'Categories',
      children: <div className='flex flex-col'>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Grocery</Text>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Pharmacy</Text>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Food</Text>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Electronics</Text>
        </div>
    },
    {
      key: '3',
      label: 'Useful Links',
      children: <div className='flex flex-col'>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Privacy Policy</Text>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >FAQ</Text>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Terms and Conditions</Text>
        </div>
    },
    {
      key: '4',
      label: 'Customer Service',
      children: <div className='flex flex-col'>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >Contact us</Text>
        <Text className='text-white hover:text-[var(--accentColor)] hover:translate-x-1 ease-in-out duration-500' >About us</Text>
        </div>
    },
  ];

  export default links;