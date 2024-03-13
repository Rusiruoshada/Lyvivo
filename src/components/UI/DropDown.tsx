import { Cascader } from 'antd';
import React from 'react';


interface CategoryProps {
  value: string;
  label: string;
  children?: {value: string; label: string;}[];
  imgPath: string;
}

const onChange: any = (value: string[]) => {
  console.log(value);
};

const displayRender = (labels: string[]) => labels[labels.length - 1];

const DropDown: React.FC<CategoryProps> = ({categories}) => {
  return (
    <Cascader
      options={categories}
      expandTrigger='hover'
      style={{
        border: 'none',
        width: 'auto',
        cursor: 'pointer',
        height: 'auto',
        zIndex: 20,
      }}
      onChange={onChange}
      placeholder={<div className='text-gray-600'>Categories</div>}
      displayRender={displayRender}
    ></Cascader>
  );
};
export default DropDown;
