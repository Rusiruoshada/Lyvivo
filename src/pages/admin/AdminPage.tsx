import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, Button, Layout, Menu } from "antd";
import items from "./items.tsx";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import { Outlet, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const url = "";
  const name = "hello, world";

  const navigate = useNavigate();

  const clickMenu = (event: any) => {
    (event.key === 'dashBoard')? navigate('/admin'): navigate(`/admin/${event.key}`)
  }

    return (
    <Layout className={`min-h-screen`}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="!bg-[var(--adminPrimaryColor)] flex flex-col shadow-md"
      >
        <div className="font-mono font-bold text-white my-3 ml-2 text-4xl ">
          {collapsed ? "$" : "Lyvivo"}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="bg-transparent font-medium text-white "
          items={items}
          onClick={clickMenu}
        />
      </Sider>
      <Layout>
        <Header className="bg-[var(--adminPrimaryColor)] !p-0 flex flex-row justify-between shadow-md !sticky top-0 left-0 right-0 bottom-auto z-50">
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
          <div className="flex flex-row gap-3 mr-6 text-white">
            <div className="my-auto cursor-pointer flex justify-center align-middle">
              <SearchBar
                position="relative"
                borderRadius="8px"
                color="#ffffff"
                backgroundColor="var(--adminPrimaryColor)"
                marginLeft="auto"
                marginRight="auto"
                className="flex my-auto rounded-md"
                buttonClassName="hover:!bg-red-400"
              />
            </div>
            <div className="flex align-middle my-auto text-2xl cursor-pointer">
              <IoMdNotificationsOutline />
            </div>
            <div className="flex flex-row gap-1 align-middle cursor-pointer">
              <Avatar src={url} className="my-auto" />
              <span>{name}</span>
            </div>
          </div>
        </Header>
        <Content>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
