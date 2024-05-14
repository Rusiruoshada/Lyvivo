import React from 'react';
import filters from './filterContent.ts';
import { Button, Checkbox, Divider } from 'antd';

interface FilterProps {
  count: number[];
}

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
        {filters.productType.map((ProductType,index) => (<Checkbox.Group
          
        />))}
      </section>
    </section>
  );
};

export default Filter;
