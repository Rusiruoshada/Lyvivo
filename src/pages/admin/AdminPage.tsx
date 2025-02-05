import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationFilled,
  NotificationOutlined,
  NotificationTwoTone,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, Button, Layout, Menu} from 'antd';
import DashBoard from '../../components/AdminUI/Dashboard/DashBoard.tsx'
import items from './items.tsx';


const AdminPage = () => {
    
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
  const url = '';
  const name = "hello, world";

  return (
    <Layout className="h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="!bg-[var(--AdminPrimaryColor)] flex flex-col"
      >
        <div className="font-mono font-bold text-white my-3 ml-2 text-4xl ">
          {collapsed ? "$" : "Lyvivo"}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="bg-transparent font-medium text-gray-700"
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="bg-[var(--AdminPrimaryColor)] !p-0 flex flex-row justify-between ">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="flex flex-row gap-3 mr-6">
            <SearchOutlined />
            <IoMdNotificationsOutline/>
            <div className="flex flex-row gap-1 align-middle">
              <Avatar src={url} className="my-auto" />
              <span>{name}</span>
            </div>
          </div>
        </Header>
        <Content
          style={{
            padding: 24,
          }}
        >
          <DashBoard />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminPage