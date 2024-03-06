import React from 'react';
import { Card } from 'antd';
import DropDown from '../UI/DropDown.tsx';

const { Meta } = Card;

interface CategoryCardProps {
  categoryName:string;
  categoryImg: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    categoryName,categoryImg
}) => (
  <Card
    style={{ width: '100%',objectFit:'cover',padding:'10px',border:0 }}
    cover={<img alt='all' src={categoryImg}/>}
  >
    <Meta
      title=<DropDown categoryName={categoryName} />
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        margin: '10px auto',
        
      }}
    />
  </Card>
);

export default CategoryCard;
