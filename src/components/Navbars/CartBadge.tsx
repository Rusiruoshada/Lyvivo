import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Switch, Space } from 'antd';

const ButtonGroup = Button.Group;

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

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
        <Badge count={count}>
          <Avatar shape="square" size="large" />
        </Badge>
        <ButtonGroup>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
        </ButtonGroup>
      </Space>
      <Space size="large">
        <Badge dot={show}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Switch onChange={onChange} checked={show} />
      </Space>
    </Space>
  );
};

export default App;