import { Button, Input, Space, Typography } from 'antd';
import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const UpperFooter: React.FC = () => {
  const { Title,Link } = Typography;

  return (
    <div className='grid grid-cols-1 sm:!grid-cols-1 md:!grid-cols-3 lg:!grid-cols-6 items-center gap-y-4 sm:gap-y-4 md:!gap-y-6 lg:!gap-y-0 '>
      <div className='flex justify-center sm:justify-center md:!justify-start lg:!justify-start'>
          <Link href='/' className='font-mono font-bold text-white mb-0 text-4xl'>Lyvivo</Link>
      </div>
      <Space.Compact className='col-span-1 md:!col-span-2 lg:!col-span-4 mx-2' size='middle'>
        <Input
          placeholder='Enter your email to subscribe to our newsletter'
          type='email'
          className='h-fit '
        />
        <Button
          type='primary'
          style={{ backgroundColor: 'var(--primaryColor)' }}
        >
          Submit
        </Button>
      </Space.Compact>
      <Space
        size='large'
        className='flex justify-center sm:!justify-center md:!justify-center lg:!justify-end gap-2 sm:!col-span-3 md:!col-span-3 lg:!col-span-1'
      >
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
