import { Space, Table, Tag } from 'antd';
import React from 'react'
import { IoArrowDownOutline } from 'react-icons/io5';
import type { GetProp, RadioChangeEvent, TableProps } from "antd";
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useForm } from 'antd/es/form/Form';
type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;

interface DataType {
  key: number;
  name: string;
  age: number;
    address: string;
    tags: string[];
  description: string;
}

interface EditableRowProps{
    index: number;
}

const ProductList = () => {

    const columns: ColumnsType<DataType> = [
      {
        title: "Name",
        dataIndex: "name",
        filters: [

        ],
        onFilter: (value, record) =>
          record.address.indexOf(value as string) === 0,
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
        onFilter: (value, record) =>
          record.address.indexOf(value as string) === 0,
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
        
        key: "action",
        render: () => (
          <Space size="middle">
            <button><FaEdit /></button>|
            <button><MdDelete /></button>
          </Space>
        ),
      },
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

    const [form] = useForm();




  return (
      <div className=''>
          
        <Table
              bordered={true}
              size='small'
              showSorterTooltip={true}
            tableLayout='auto'
            pagination={{ position:['none','bottomCenter'] }}
            columns={tableColumns}
            dataSource={data}
            // scroll={scroll}
        />
    </div>
  )
}

export default ProductList;