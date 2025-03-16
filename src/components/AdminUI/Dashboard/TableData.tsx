import React from "react";
import { Tag } from "antd";
import { TableProps } from "antd";


interface DataType {
  key: string;
  productName: string;
  noOfProductSold: number;
  price: string;
  tags: string[];
}

export const columns: TableProps<DataType>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "John",
        value: "John",
      },
    ],
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value, record) => record.productName.startsWith(value as string)
  },
  {
    title: "No of Product Sold",
    dataIndex: "noOfProductSold",
    key: "noOfProductSold",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.noOfProductSold - b.noOfProductSold,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    responsive: ["sm"],
  },
  {
    title: "Category",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color;
          if (tag.toLowerCase() === "in stock") {
            color = "green";
          }
          if (tag.toLowerCase() === "out of stock") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

export const data: DataType[] = [
  {
    key: "1",
    productName: "John Brown",
    noOfProductSold: 32,
    price: "19.32",
    tags: ["In stock"],
  },
  {
    key: "2",
    productName: "Jim Green",
    noOfProductSold: 42,
    price: "32.43",
    tags: ["Out of stock"],
  },
  {
    key: "3",
    productName: "Joe Black",
    noOfProductSold: 32,
    price: "10.32",
    tags: ["in stock"],
  },
  {
    key: "4",
    productName: "Joe Black",
    noOfProductSold: 32,
    price: "10.32",
    tags: ["in stock"],
  },
  {
    key: "5",
    productName: "Joe Black",
    noOfProductSold: 32,
    price: "10.32",
    tags: ["in stock"],
  },
];
    