import React from 'react';
import {TeamOutlined} from '@ant-design/icons';
import { MdDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosCheckbox } from "react-icons/io";
import type { MenuProps } from 'antd';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "dashBoard", <MdDashboard />),
  getItem("Sales", "sales", <BsCurrencyDollar />),
  getItem("Products", "products", <IoIosCheckbox />, [
    getItem("Product List", "productList"),
    getItem("Category List", "categoryList"),
  ]),
  getItem("Customers", "customers", <TeamOutlined />),
  getItem("Report", "report", <TbReportAnalytics />),
  getItem("Settings", "settings", <IoSettingsSharp />),
];

export default items;