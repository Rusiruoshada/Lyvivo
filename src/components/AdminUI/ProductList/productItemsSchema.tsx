import React from 'react'
import { DataType } from '../../../types/productItemListTypes.ts'
import { MdDeleteOutline } from 'react-icons/md';
import { Popconfirm, Space, Tag } from 'antd';
import { TbEdit } from 'react-icons/tb';
import { ColumnsType } from 'antd/es/table/InternalTable';


export const getData = () => {

}


export const columns: ColumnsType<DataType> = [
  {
    key: "productName",
    title: "Product Name",
    dataIndex: "productName",
    filters: [
      {
        text: "John",
        value: "John",
      },
      {
        text: "new",
        value: "new",
      },
    ],
    onFilter: (value, record) =>
      record.productName.indexOf(value as string) === 0,
    filterSearch: true,
    width: "230px",
  },
  {
    key: "category",
    title: "Category",
    dataIndex: "category",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) =>
      record.category?.indexOf(value as string) === 0,
    width: "150px",
  },
  {
    key: "price",
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
    width: "100px",
  },
  {
    key: "stock",
    title: "Stock",
    dataIndex: "stock",
    width: "40px",
    align: "center",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    width: "100px",
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          let color = tag.toLowerCase() === "active" ? "green" : "red";

          return (
            <Tag color={color} key={tag} className="m-0">
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
    align: "center",
    filters: [
      { text: "Active", value: "active" },
      { text: "Out of Stock", value: "Out of Stock" },
    ],
    onFilter: (value, record) => record.tags.indexOf(value as string) === 0,
  },
  {
    key: "edit",
    dataIndex: "edit",
    render: () => (
      <Space size="middle">
        <button className="hover:!scale-110 hover:text-cyan-500">
          <TbEdit className="text-[18px] shadow-sm" />
        </button>
      </Space>
    ),
    colSpan: 2,
    align: "center",
    width: "40px",
  },
  {
    key: "delete",
    dataIndex: "delete",
    render: (_, record) => {
      return (
        <Popconfirm
          title="Confirm deleting"
          okType="danger"
          showCancel={false}
        //   onConfirm={() => handleDelete(record.key)}
        >
          <button className="hover:!scale-110 hover:text-red-500">
            <MdDeleteOutline className="text-[18px] shadow-sm" />
          </button>
        </Popconfirm>
      );
    },
    colSpan: 0,
    align: "center",
    width: "40px",
  },
];

