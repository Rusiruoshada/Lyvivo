import React from "react";
import { ColumnDataTypes } from "../../../types/productItemListTypes.ts";
import { MdDeleteOutline } from "react-icons/md";
import { Image, Popconfirm, Space, Tag } from "antd";
import { TbEdit } from "react-icons/tb";



const columnData: ColumnDataTypes = {
  productName: {
    key: "productName",
    title: "Product Name",
    dataIndex: "productName",
    filterSearch: true,
    width: "230px",
    render: (item: string[]) => (
      <span className="flex gap-2">
        <Image
          src={item[0]}
          alt={item[0] + " Product image url"}
          width={80}
          preview={false}
        />
        <span className="flex items-center text-wrap">{item[1]}</span>
      </span>
    ),
  },
  category: {
    key: "category",
    title: "Category",
    dataIndex: "category",
    filters: [
      {
        text: "Electronics",
        value: "Electronics",
      },
      {
        text: "Food",
        value: "Food",
      },
      {
        text: "Pharmacy",
        value: "Pharmacy",
      },
      {
        text: "Grocery",
        value: "Grocery",
      },
    ],
    onFilter: (value, record) =>
      record.category?.indexOf(value as string) === 0,
    width: "150px",
  },
  price: {
    key: "price",
    title: "Price",
    dataIndex: "price",
    width: "100px",
    sorter: (a: any, b: any) => a.price - b.price,
  },
  stock: {
    key: "stock",
    title: "Stock",
    dataIndex: "stock",
    width: "40px",
    align: "center",
  },
  status: {
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
    onFilter: (value, record) =>
      record.tags?.indexOf(value as string) === 0,
  },
  edit: {
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
  delete: {
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
};

export default columnData;
