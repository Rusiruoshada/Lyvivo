import React from 'react';
import { Cascader } from 'antd';

interface DropDownProps {
    dropDown: {
        categoryName: string;
    subCategories: string[];
    imgPath: string
      };
} 



const onChange = (value: string[]) => {
  console.log(value);
};

const DropDown: React.FC<DropDownProps> = ({dropDown}) => (
  <Cascader defaultValue={['zhejiang']} options={dropDown}  />
);

export default DropDown;