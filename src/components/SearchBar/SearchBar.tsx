import React from 'react';
import { Button, Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { MdSearch } from 'react-icons/md';

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>{
  console.log(info?.source, value);
}

const customButton = <Button type="primary" icon={<MdSearch className='text-2xl' />} />;

const SearchBar: React.FC = () => (
  <Space direction='vertical' >
    
    <Search
      placeholder='input search text'
      enterButton={customButton}
      allowClear
      size='large'
      onSearch={onSearch}
      style={{
        position: 'absolute',
        bottom: 'auto',
        right: '0px',
        left: '0px',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'var(--primaryColor)',
        borderRadius: '8px',
        color: '#ffffff',
      }}
      className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[65%] top-[70px] sm:top-[70px] md:top-[65px] lg:top-[65px]'
    />
  </Space>
);

export default SearchBar;
