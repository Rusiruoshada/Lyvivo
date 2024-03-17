import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface CategoryCardProps {
  categoryName: string;
  categoryImg: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  categoryImg,
}) => {
  const onCardClick = (event: any) => {
    alert(event.target.ariaLabel);
  };

  return (
    <Card
      style={{
        width: '100%',
        objectFit: 'cover',
        padding: '10px',
        cursor: 'pointer',
      }}
      cover={
        <img aria-label={categoryName} alt={categoryName} src={categoryImg} />
      }
      aria-label={categoryName}
      onClick={onCardClick}
      className='last:[&_div]:p-0 '
    >
      <Meta
        title=<p className='m-0 py-3 text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px] ' aria-label={categoryName}>
          {categoryName}
        </p>
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          textAlign: 'center',
          margin: '0px auto',
          padding: 0,
        }}
      />
    </Card>
  );
};

export default CategoryCard;
