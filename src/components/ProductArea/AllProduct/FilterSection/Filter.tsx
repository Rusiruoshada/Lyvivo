import React from 'react';
import filters from './filterContent.ts';
import { Button, Collapse, Divider, Menu } from 'antd';

interface FilterProps {
  count: number[];
}

const items = [
{
  key: '1',
  label: 'Product Types',
  children: [filters.productType.map((productItem,index) => (<div><input type='checkbox'  /> <label title={productItem.label}>{productItem.label}</label></div>))],
}
]

const Filter: React.FC<FilterProps> = ({ count }) => {
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
          style={{ width: 256, borderBottom: 'none'   }}
          items={items}
          expandIconPosition='end'
          bordered={false}
          ghost
          defaultActiveKey={['1']}
          className='border-none shadow-none'
        /> 
      </section>
      <section className='p-3'>
            
      </section>
    </section>
  );
};

export default Filter;
