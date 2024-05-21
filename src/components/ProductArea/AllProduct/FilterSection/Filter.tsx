import React, {  useState } from 'react';
import filters from './filterContent.ts';
import { Button, Collapse, Divider, InputNumber, Slider } from 'antd';

interface FilterProps {
  count: number[];
}

interface Items{
  key: string,
  label: JSX.Element,
  children: JSX.Element[];
}

interface Price{
  key: string,
  label: JSX.Element,
  children: JSX.Element;
}

interface Availability{
  key: string,
  label: JSX.Element,
  children: JSX.Element;
}

const Filter: React.FC<FilterProps> = ({ count }) => {
  const [inputValue, setInputValue] = useState({ input1: 1, input2: 9999 });

  const onChangeInput: any = (newValue: number) => {
    setInputValue((prev) =>
    prev.input1 !== newValue[0]
    ? { input1: newValue[0], input2: prev.input2 }
    : { input1: prev.input1, input2: newValue[1] }
    );
  };
  
  const items:Items[] = [
    {
      key: '1',
      label: <p className='font-bold my-0 py-0'>Product Types</p>,
      children: 
        filters.productType.map((productItem, index) => (
          <div key={index} className='my-0 py-0 flex gap-2'>
            <input type='checkbox' />{' '}
            <label title={productItem.label}>{productItem.label}</label>
          </div>
        )),
      
    },
  ];
  
  const price:Price[] = [
    {
      key: '2',
      label: <p className='font-bold py-0 my-0'>Price</p>,
      children: 
        <div className='py-0' style={{padding:0}}>
          <Slider
            min={1}
            max={9999}
            range={{ draggableTrack: true }}
            onChange={onChangeInput}
            defaultValue={[
              inputValue.input1 > 0 ? inputValue.input1 : 0,
              inputValue.input2 <= 9999 ? inputValue.input2 : 9999,
            ]}
          />
          <div className='flex justify-center items-center'>
            <InputNumber
              min={1}
              max={9999}
              style={{ margin: '0 16px' }}
              value={inputValue.input1}
              onChange={onChangeInput}
            />
            <p className='inline m-0'> - </p>
            <InputNumber
              min={1}
              max={9999}
              style={{ margin: '0 16px' }}
              value={inputValue.input2}
              onChange={onChangeInput}
            />
          </div>
        </div>
    }
  ]
  
  const availability:Availability[] = [
    {
      key: '3',
      label: <p className='font-bold my-0 py-0'>Availability</p>,
      children: 
          <div className='my-0 py-0'>
            <div className='flex gap-2'>
              <input title='In stock' type='checkbox' />{' '}
              <label  title={'In stock'}>{'In stock'}</label>
            </div>
            <div className='flex gap-2'>
              <input title='Out of stock' type='checkbox' />{' '}
              <label  title={'Out of stock'}>{'Out of stock'}</label>
            </div>
          </div>
      
    },
  ]

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
            key={index}
          >
            {special} ({count[index]})
          </Button>
        ))}
      </section>
      <Divider />
      <section className='px-3'>
        <h4>Filters</h4>
        <Collapse
          // onClick={onClick}
          style={{ width: 256, borderBottom: 'none' }}
          items={items}
          expandIconPosition='end'
          bordered={false}
          ghost
          defaultActiveKey={['1']}
          className='border-none shadow-none py-0'
        />
      </section>
      <section className='px-3'>
        <Collapse
            // onClick={onClick}
            style={{ width: 256, borderBottom: 'none' }}
            items={price}
            expandIconPosition='end'
            bordered={false}
            ghost
            defaultActiveKey={['2']}
            className='border-none shadow-none py-0'
          />
      </section>
      <section className='px-3'>
        <Collapse
            // onClick={onClick}
            style={{ width: 256, borderBottom: 'none' }}
            items={availability}
            expandIconPosition='end'
            bordered={false}
            ghost
            defaultActiveKey={['3']}
            className='border-none shadow-none py-0'
          />
      </section>
    </section>
  );
};

export default Filter;
