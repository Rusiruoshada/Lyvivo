import { Button, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import type { GetProp, TableProps } from "antd";
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { IoAddCircleOutline } from 'react-icons/io5';
type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;

interface DataType {
  key: number;
  name: string;
  age: number;
    address?: string;
    tags: string[];
  description?: string;
}

const ProductList = () => {

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: 'John',
          value: 'John'
        },
        {
          text: 'new',
          value: 'new'
        }
      ],
      onFilter: (value, record) =>
        record.name.indexOf(value as string) === 0,
      filterSearch: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
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
      // onFilter: (value, record) =>
      //   record.address.indexOf(value as string) === 0,
    },
    {
      title: 'Status',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.toLowerCase() === 'active' ? 'green' : '';
                    
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
                    
          })}
        </span>
      )
            
    },
    {
        
      key: "edit",
      dataIndex: 'edit',
      render: () => (
        <Space size="middle">
          <button><FaEdit /></button>
        </Space>
      ),
      colSpan:2,
    },
    {
      key: 'delete',
      dataIndex: 'delete',
      render: ()=> {
        return (
          <Space size={"middle"}>
            <button>
              <MdDelete />
            </button>
          </Space>
        );
      },
      colSpan: 0,
    }
    ];

    const tableColumns = columns.map((item) => ({ ...item }));
    
    const data = Array.from({ length: 10 }).map<DataType>((_, i) => ({
      key: i,
      name: "John Brown",
      age: Number(`${i}2`),
        address: `New York No. ${i} Lake Park`,
      tags: ['active'],
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    }));

  const [dataSource, setDataSource] = useState([...data])
  
  const handleAdd = () => {
    const newData: DataType = {
        key: Math.random()*10 +1,
      name: 'new row',
        age: 21,
      address: '',
        tags:['active']
    }
    setDataSource([...dataSource,newData])  
  }

  return (
    <div className="p-4">
      <div className='flex justify-end'>
        <Button
          onClick={handleAdd}
          type="primary"
          className="bg-[var(--adminPrimaryColor)] flex flex-row items-center gap-1 hover:!bg-[var(--adminPrimaryColorDark)] shadow-md mb-2"
        >
          <span className="flex justify-center items-center">
            <IoAddCircleOutline className="text-[18px]" />
          </span>{" "}
          Add new Product
        </Button>
      </div>
      <Table
        bordered={true}
        size="small"
        showSorterTooltip={true}
        tableLayout="auto"
        pagination={{ position: ["none", "bottomCenter"] , current:1,pageSize:14}}
        columns={tableColumns}
        dataSource={dataSource}
        // scroll={scroll}
      />
    </div>
  );
}

export default ProductList;