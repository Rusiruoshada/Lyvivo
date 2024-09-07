import React from 'react';
import { Card } from 'antd';
import CountDown from './CountDown.tsx';

interface CartProductCardProps {
  productName: string;
  price: number;
  originalSavingPrice: number;
  count: number;
  image: string;
  size: number;
  id: string;
  removeProductFC: any;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
  productName,
  price,
  originalSavingPrice,
  count,
  image,
  size,
  id,
  removeProductFC,
}) => {
  const { Meta } = Card;

  return (
    <div>
      <Card
        key={id}
        style={{ width: '100%' }}
        className='flex flex-row justify-between'
        cover={
          <div>
            <img
              alt={productName}
              src={image}
              className='!w-fit !h-full aspect-square !rounded-tl-md !rounded-tr-none !rounded-bl-md !rounded-br-none'
            />
          </div>
        }
        actions={[
          <div>
            <CountDown
              count={count}
              size={size}
              productName={productName}
              price={price}
              originalSavingPrice={originalSavingPrice}
              id={id}
            />
          </div>,
        ]}
        bordered={false}
        rootClassName='mb-4 !shadow-md'
      >
        <div className='!p-0'>
          <Meta
            className='!p-0 max-w-full'
            title={
              <div
                className={`${
                  productName.length > 20
                    ? 'text-[13px] text-wrap leading-tight'
                    : 'text-1xl'
                }`}
              >
                {productName}
              </div>
            }
            description={
              <div>
                <h3 className='font-bold '>Rs. {price.toFixed(2)}</h3>
                {size && <h4>{size + `${size.toString()==='1L'?'': size >= 1000? 'kg' : 'g'}`}</h4>}
              </div>
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default CartProductCard;
