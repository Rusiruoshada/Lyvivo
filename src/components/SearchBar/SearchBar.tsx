import React from 'react';
import { Button, Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { MdSearch } from 'react-icons/md';

interface SearchBarProps {
  position?: "relative" | "absolute" | "fixed" | "sticky" | "static";
  borderRadius?: string;
  bottom?: string;
  right?: string;
  left?: string;
  marginRight?: string;
  marginLeft?: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
  buttonClassName?:string;
}

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>{
  console.log(info?.source, value);
}


const SearchBar: React.FC<SearchBarProps> = ({
  className,
  position,
  borderRadius,
  bottom,
  right,
  left,
  marginLeft,
  marginRight,
  color,
  backgroundColor,
  buttonClassName,
}) => {
  const customButton = (
    <Button
      type="primary"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
      icon={<MdSearch className="text-2xl" />}
    />
  );

  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        enterButton={customButton}
        allowClear
        size="middle"
        onSearch={onSearch}
        style={{
          position: position,
          bottom: bottom,
          right: right,
          left: left,
          marginRight: marginRight,
          marginLeft: marginLeft,
          color: color,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
        }}
        className={className}
      />
    </Space>
  );
};

export default SearchBar;
