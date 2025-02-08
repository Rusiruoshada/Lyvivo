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
  getItem("Dashboard", "1", <MdDashboard />),
  getItem("Sales", "2", <BsCurrencyDollar />),
  getItem("Products", "sub1", <IoIosCheckbox />, [
    getItem("Product List", "3"),
    getItem("Category List", "4"),
  ]),
  getItem("Customers", "sub2", <TeamOutlined />),
  getItem("Report", "9", <TbReportAnalytics />),
  getItem("Settings", "10", <IoSettingsSharp />),
];

export default items;