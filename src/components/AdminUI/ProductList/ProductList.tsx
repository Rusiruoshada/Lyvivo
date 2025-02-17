import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import React, { useState } from 'react'
import type { GetProp, TableProps } from "antd";
import { MdDeleteOutline } from 'react-icons/md';
import { IoAddCircleOutline } from 'react-icons/io5';
import { TbEdit } from 'react-icons/tb';
type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;

interface DataType {
  key: number;
  productName: string;
  price: number;
  category: string;
    tags: string[];
  description?: string;
  itemCount: number;
}

const ProductList = () => {

  const columns: ColumnsType<DataType> = [
    {
      key:'productName',
      title: "Product Name",
      dataIndex: "productName",
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
        record.productName.indexOf(value as string) === 0,
      filterSearch: true,
    },
    {
      key: 'price',
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      width: '70px'
    },
    {
      key:'category',
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
    },
    {
      key: 'itemCount',
      title: 'Item Count',
      dataIndex: 'itemCount',
      width: '40px',
    },
    {
      title: 'Status',
      key: 'tags',
      dataIndex: 'tags',
      width: '50px',
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => {
            let color = tag.toLowerCase() === 'active' ? 'green' : 'red';
                    
            return (
              <Tag color={color} key={tag} className='m-0' >
                {tag.toUpperCase()}
              </Tag>
            );
                    
          })}
        </span>
      ),
      align: 'center',
      filters: [
        {text:'Active',value:'active'},{text:'Out of Stock', value:'Out of Stock'}
      ],
      onFilter: (value, record) =>
        record.tags.indexOf(value as string) === 0,
    },
    {
        
      key: "edit",
      dataIndex: 'edit',
      render: () => (
        <Space size="middle">
          <button className='hover:!scale-110 hover:text-cyan-500'><TbEdit className='text-[18px] shadow-sm' /></button>
        </Space>
      ),
      colSpan: 2,
      align: 'center',
      width: '40px'
    },
    {
      key: 'delete',
      dataIndex: 'delete',
      render: (_, record)=> {
        return (
          <Popconfirm title='Confirm deleting' okType='danger' showCancel={false}  onConfirm={()=> handleDelete(record.key)}>
            <button className='hover:!scale-110 hover:text-red-500'>
              <MdDeleteOutline className='text-[18px] shadow-sm' />
            </button>
          </Popconfirm>
        );
      },
      colSpan: 0,
      align: 'center',
      width:'40px'
      
    }
    ];

  const handleDelete = (key: number) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData)
  };
  
    const tableColumns = columns.map((item) => ({ ...item }));
    
    const data = Array.from({ length: 10 }).map<DataType>((_, i) => ({
      key: i,
      productName: "John Brown",
      price: Number(`${i}2`),
      itemCount: Number({i}),
      category: `New York No. ${i} Lake Park`,
      tags: ['active'],
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    }));

  const [dataSource, setDataSource] = useState([...data])
  
  const handleAdd = () => {
    const newData: DataType = {
      key: Math.random()*10 +1,
      productName: 'new row',
      price: 21,
      itemCount: 12,
      category: 'Electric',
        tags:['Out of Stock']
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