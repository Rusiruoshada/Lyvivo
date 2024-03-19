import { Avatar, Card, Space } from 'antd';
import React from 'react';
import { MdOutlineLocalOffer } from "react-icons/md";

const Meta = Card.Meta;

const TextWithIcon = () => {
  return (
    <Space direction='vertical'>
      <Card style={{ width: 300, marginTop: 16,border:0,  }}>
        <Meta
          avatar={
            <Avatar icon={<MdOutlineLocalOffer />} />
          }
          title='Card title'
          description='This is the description'
        />
      </Card>
    </Space>
  );
};

export default TextWithIcon;
