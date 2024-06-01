import React from 'react';
import { Button, Card, Badge } from 'antd';
import { BsCart2, BsEscape, BsListCheck, BsTicketDetailed } from 'react-icons/bs';
import DropDown from './DropDown.tsx';

interface ItemCardProps {
  cardTitle: string;
  cardDescription: string;
  cardPrice: string;
  badgeRibbonText?: string;
  badgeColor?: string;
  saving?: string;
  categories: {
    value: string;
    label: string;
    children: {value: string; label: string;}[];
    imgPath: string;
  }[]
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>
}

const { Meta } = Card;

const ItemCard: React.FC<ItemCardProps> = ({
  cardTitle,
  cardDescription,
  cardPrice,
  badgeRibbonText,
  badgeColor,
  saving,
  categories,
  onClickFunction
}) => {

  return (

    <Card
      style={{ width: 300 }}
      cover={
        <Badge.Ribbon text={badgeRibbonText} color={badgeColor}>
          <Badge.Ribbon
            text={saving}
            placement='start'
            color='var(--savingBadgeColor)'
            className={`text-[18px] py-1 ${!saving ? 'hidden' : ''}`}
          >
            <img
              className='aspect-square '
              alt='example'
              src='./images/Pic923056.jpg'
            />
          </Badge.Ribbon>
        </Badge.Ribbon>
      }
      className='scale-[0.80] hover:shadow-lg hover:pscale-[0.81] border-2'
      actions={[
        <div className='flex flex-col gap-y-3 justify-center items-center'>
        <Button
          style={{
            width: '90%',
            backgroundColor: 'var(--primaryColor)',
            borderColor: 'var(--primaryColor)',
            color: 'white'
          }}
          className='hover:!bg-[var(--primaryColor)] hover:shadow-md hover:scale-105  text-[18px]'
          size='large'
          icon=<BsCart2 />
          // onClick={onClickFunction}          
        >
          Add to Cart
        </Button>
        <Button
          style={{
            width: '90%',
            color: 'var(--primaryColor)',
            borderColor: 'var(--primaryColor)',
          }}
          className='hover:shadow-md hover:scale-105 text-[18px] !items-center flex flex-row justify-center'
          size='large'
          icon=<BsListCheck />
          // onClick={onClickFunction}          
        >
          Details
        </Button>
        </div>
      ]}
    >
      <Meta title=<h4 className='font-bold  capitalize'>{cardTitle}</h4> />
      <DropDown
        placeholderName='place'
        categories={categories}
        className='[&_div]:!bg-gray-200 w-100 my-3  '
      />
      <Meta
        title=<h4 className='font-medium  m-0 capitalize'>Rs. {cardPrice}</h4>
        description=<p className='text-[18px]  m-0 capitalize'>
          {cardDescription}
        </p>
      />
    </Card>
  );
};

export default ItemCard;
