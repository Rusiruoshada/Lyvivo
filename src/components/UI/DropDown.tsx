import { Cascader, Dropdown } from 'antd';
import React from 'react';
import { categories1 } from '../HomeShopByCategory/exportCategoryObject.tsx';

interface DropDownProps {
  categoryName: string;
}

const onChange: any = (value: string[]) => {
  console.log(value);
};

const DropDown: React.FC<DropDownProps> = ({ categoryName }) => {
  return (
    <Cascader
      options={categories1}
      expandTrigger='hover'
      style={{ border: 'none', width: '100%', cursor: 'pointer' }}
      onChange={onChange}
    >
      <div className='cursor-pointer'>{categoryName}</div>
    </Cascader>
  );
};
export default DropDown;
