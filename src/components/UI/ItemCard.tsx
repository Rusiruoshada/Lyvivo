import React, { useState } from 'react';
import { Button, Card, Badge, Radio, RadioChangeEvent } from 'antd';
import { BsCart2, BsListCheck } from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';


interface ItemCardProps {
  cardTitle: string;
  cardDescription: string;
  cardPrice: string;
  badgeRibbonText?: string;
  badgeColor?: string;
  saving?: number;
  onAddToCartClick: any;
  id: string;
  image: string;
  weight?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  cardTitle,
  cardDescription,
  cardPrice,
  badgeRibbonText,
  badgeColor,
  saving,
  onAddToCartClick,
  id,
  image,
  weight,
}) => {
  const { Meta } = Card;

  const navigate = useNavigate();
  const [value, setValue] = useState<string | undefined>();
  
  const onWeightChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setValue(value);
  };
  
  const onNavigate = (id:string):any => {
    navigate(`/product/${id}`)
  }


  const options = weight
    ? [
        { label: weight + 'g', value: weight + 'g' },
      ]
    : [];

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <Badge.Ribbon text={badgeRibbonText} color={badgeColor}>
          <Badge.Ribbon
            text={'Save Rs.' + saving}
            placement='start'
            color='var(--savingBadgeColor)'
            className={`text-[18px] py-1 ${!saving ? 'hidden' : ''}`}
          >
            <img className='aspect-square ' alt='example' src={image} />
          </Badge.Ribbon>
        </Badge.Ribbon>
      }
      className='scale-[0.80] hover:shadow-lg] border-2'
      actions={[
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <Button
            style={{
              width: '90%',
              backgroundColor: 'var(--primaryColor)',
              borderColor: 'var(--primaryColor)',
              color: 'white',
            }}
            className='hover:!bg-[var(--primaryColor)] hover:shadow-md hover:scale-105  text-[18px]'
            size='large'
            icon=<BsCart2 />
            onClick={() => onAddToCartClick(id)}
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
            // href={`/product/${id}`}
            onClick={() => onNavigate(id)}
          >
          Details
          </Button>
        </div>,
      ]}
    >
      <Meta title=<h4 className={`font-bold  capitalize ${cardTitle.length > 18? 'text-wrap text-[18px]' : ''} `} title={cardTitle}>{cardTitle}</h4> />

      <Radio.Group
        options={options}
        onChange={onWeightChange}
        value={value}
        optionType='button'
        className='w-100 my-3'
      />
      
      <Meta
        title=<div>
          <h4 className='font-medium  m-0 capitalize'>Rs. {cardPrice}</h4>
          <h5 className='line-through semibold text-red-300'>
            Rs. {parseFloat(cardPrice) + (saving || 0)}
          </h5>
        </div>
        description=<p className='text-[18px]  m-0 capitalize'>
          {cardDescription}
        </p>
      />
    </Card>
  );
};

export default ItemCard;
