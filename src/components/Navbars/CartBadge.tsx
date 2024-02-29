import React, {useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {Badge, Button, Space } from 'antd';
import { BsCart3 } from 'react-icons/bs';

const ButtonGroup = Button.Group;

const CartBadge: React.FC = () => {
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };


  return (
    <Space direction="vertical">
      <Space size="large">
        <Badge count={count} color='var(--primaryColor)'>
            <BsCart3 className='text-[var(--primaryColor)] font-bold text-2xl' />
        </Badge>
      </Space>
    </Space>
  );
};

export default CartBadge;