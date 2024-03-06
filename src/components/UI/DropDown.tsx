import { Cascader } from 'antd';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {categories1} from '../HomeShopByCategory/exportCategoryObject.tsx'

interface DropDownProps {
  categoryName: string;
}

const onChange = (value: string[]) => {
  console.log(value);
};

const DropDown: React.FC<DropDownProps> = ({ categoryName }) => {
  return (
    <Cascader
    options={categories1}
    expandTrigger="hover"
    style={{border:'none',width:'100%'}}
  >
    <p>{categoryName}</p>
    </Cascader>
  );
};
export default DropDown;
