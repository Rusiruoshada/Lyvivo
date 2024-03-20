import { Avatar, Card, Space } from 'antd';
import React from 'react';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlinePayments } from 'react-icons/md';
import { BsBagPlus } from 'react-icons/bs';

interface DetailsTypes {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Meta = Card.Meta;

const details: DetailsTypes[] = [
  {
    title: 'Best Prices & Offers',
    description: 'Cheaper prices than your local supermarket.',
    icon: <MdOutlineLocalOffer />,
  },
  {
    title: 'Get groceries delivered',
    description: 'We will deliver your groceries direct to your door.',
    icon: <TbTruckDelivery />,
  },
  {
    title: 'More payment Options',
    description:
      'Now you can Pay Online, by Cash on Delivery or Card on Delivery.',
    icon: <MdOutlinePayments />,
  },
  {
    title: 'Wide Assortment',
    description:
      'Choose from 5000+ products across food, personal care, household & other categories.',
    icon: <BsBagPlus />,
  },
];

const TextWithIcon = () => {
  return (
    <Space
      direction='horizontal'
      align='start'
      className='grid justify-center grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 sm:my-1 lg:my-4'
    >
      {details.map((detailItem) => (
        <Card
          style={{ marginTop: 16, border: 0, padding: 0 }}
          className='flex justify-center w-fit [&>div]:!py-0'
          key={detailItem.title}
          size='small'
        >
          <Meta
            avatar={
              <Avatar
                className='bg-transparent text-[--secondaryColor] shadow-sm'
                icon={detailItem.icon}
              />
            }
            title=<p className='m-0 text-sm'>{detailItem.title}</p>
            description=<p className='text-xs'>{detailItem.description}</p>
          />
        </Card>
      ))}
    </Space>
  );
};

export default TextWithIcon;
