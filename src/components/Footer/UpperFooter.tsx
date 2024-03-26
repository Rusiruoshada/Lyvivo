import { Button, Input, Space, Typography } from 'antd';
import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const UpperFooter: React.FC = () => {
  const { Title } = Typography;

  return (
    <div className='grid grid-cols-6 items-center '>
      <div>
        <Title level={1} className='font-mono font-bold text-white mb-0'>
          Lyvivo
        </Title>
      </div>
      <Space.Compact className='col-span-4'>
        <Input placeholder='Enter Your Email' type='email' className='h-fit' />
        <Button
          type='primary'
          style={{ backgroundColor: 'var(--primaryColor)' }}
        >
          Submit
        </Button>
      </Space.Compact>
      <Space className='flex justify-end '>
        <Button className='hover:!bg-[var(--primaryColor)] border-[var(--primaryColor)]'>
          <FaFacebookF className='text-white ' />
        </Button>
        <Button className='hover:!bg-[var(--primaryColor)] border-[var(--primaryColor)]'>
          <FaTwitter className='text-white ' />
        </Button>
        <Button className='hover:!bg-[var(--primaryColor)] border-[var(--primaryColor)]'>
          <RiInstagramFill className='text-white ' />
        </Button>
      </Space>
    </div>
  );
};

export default UpperFooter;
