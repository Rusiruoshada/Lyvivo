import { Cascader } from 'antd';
import React from 'react';

interface CategoryProps {
  categories: {
    value: string;
    label: string;
    children?: { value: string; label: string }[];
    imgPath: string;
  }[];
  displayRender?: (labels: string[]) => React.ReactNode;
  placeholderName: string;
  className?:string;
}

const onChange: any = (value: string[]) => {
  console.log(value);
};

const DropDown: React.FC<CategoryProps> = ({ categories, displayRender,placeholderName,className }) => {
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
      placeholder={<div className='text-gray-600'>{placeholderName}</div>}
      displayRender={displayRender}
      className={className}
    ></Cascader>
  );
};
export default DropDown;
