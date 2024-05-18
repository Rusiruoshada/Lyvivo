import React, { useState } from 'react';
import filters from './filterContent.ts';
import { Button, Collapse, Divider, InputNumber, Slider } from 'antd';

interface FilterProps {
  count: number[];
}

const items = [
{
  key: '1',
  label: 'Product Types',
  children: [filters.productType.map((productItem,index) => (<div><input type='checkbox'  /> <label title={productItem.label}>{productItem.label}</label></div>))],
}]



const Filter: React.FC<FilterProps> = ({ count }) => {
  
  const [inputValue, setInputValue] = useState({input1:1, input2: 9999});
  
  const onChange:any = (newValue:number) => {
    setInputValue({input1:newValue,input2:newValue});
  };
  return (
    <section className='border border-gray-300 w-fit mx-10'>
      <section className='p-3'>
        <h4>Lyvivo Specials</h4>
        {filters.specials.map((special, index) => (
          <Button
            type='link'
            onClick={() => {
              alert(special);
            }}
            className='flex flex-cols text-black '
          >
            {special} ({count[index]})
          </Button>
        ))}
      </section>
      <Divider />
      <section className='p-3'>
        <h4>Filters</h4>
        <Collapse
        // onClick={onClick}
          style={{ width: 256, borderBottom: 'none' }}
          items={items}
          expandIconPosition='end'
          bordered={false}
          ghost
          defaultActiveKey={['1']}
          className='border-none shadow-none'
        /> 
      </section>
      <section className='p-3'>
      <Slider
          min={1}
          max={9999}
          range
          onChange={onChange}
          value={[ inputValue.input1 > 0? inputValue : 0,inputValue.input2 > 0? inputValue : 0 ]}
        />
        <InputNumber
          min={1}
          max={9999}
          style={{ margin: '0 16px' }}
          value={inputValue.input1}
          onChange={onChange}
        />
        <p className='inline'>- to -</p>
        <InputNumber
          min={1}
          max={9999}
          style={{ margin: '0 16px' }}
          value={inputValue.input2}
          onChange={onChange}
        />
      </section>
    </section>
  );
};

export default Filter;
