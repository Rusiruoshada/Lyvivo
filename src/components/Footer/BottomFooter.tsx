import { Image, Space, Typography } from 'antd';
import React from 'react';
import { BsHeartFill } from 'react-icons/bs';

const BottomFooter = () => {
  const { Text } = Typography;
  const currentYear: number = new Date().getFullYear();
  const paymentMethods = [
    {
      key: 1,
      imgPath: './images/bottom Footer payment ways/visa.png',
      alt: 'visa',
    },
    {
      key: 2,
      imgPath: './images/bottom Footer payment ways/mastercard.png',
      alt: 'visa',
    },
    {
      key: 3,
      imgPath: './images/bottom Footer payment ways/american express.png',
      alt: 'visa',
    },
    {
      key: 4,
      imgPath: './images/bottom Footer payment ways/safe pay.png',
      alt: 'visa',
    },
  ];

  return (
    <Space className='flex justify-between bg-[var(--footerBgColorDark)] h-20 !px-4 sm:!px-4 md:!px-10 lg:!px-10 !flex-col sm:!flex-col md:!flex-row lg:!flex-row [&>div]:flex'>
      <Text className='text-white text-xs !text-center sm:!text-center md:!text-start lg:!text-start'>
        Copyright &copy; 2023-{currentYear} Made with{' '}
        <BsHeartFill className='inline text-red-500' /> by ROMs. All Rights Reserved
      </Text>
      <Space.Compact>
        {paymentMethods.map((paymentMethod) => (
          <Image
            src={paymentMethod.imgPath}
            alt={paymentMethod.alt}
            key={paymentMethod.key}
            className='px-1 hover:scale-[1.03]'
            loading='lazy'
            preview={false}           
          />
        ))}
      </Space.Compact>
    </Space>
  );
};

export default BottomFooter;
