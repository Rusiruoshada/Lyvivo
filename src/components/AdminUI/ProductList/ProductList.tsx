import { Button,Table } from 'antd';
import React, { useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5';
import { DataType } from '../../../types/productItemListTypes.ts';
import { columns } from './productItemsSchema.tsx';
import axios from "axios";

const ProductList = () => {

  const getData = async() =>{
    const response = await axios.get(
      `http://localhost:5000/api/getAllProductData`
    );
    const data = response.data;
    console.log(data)
  }

  getData();
  
    const handleDelete = (key: number) => {
      const newData = dataSource.filter((item) => item.key !== key);
      setDataSource(newData)
    };
  
    const tableColumns = columns.map((item) => ({ ...item }));
    
    const data = Array.from({ length: 10 }).map<DataType>((_, i) => ({
      key: i,
      productName:["","John Brown"],
      price: Number(`${i}2`),
      stock: Number(i+23),
      category: `New York No. ${i} Lake Park`,
      tags: ['active'],
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    }));

  const [dataSource, setDataSource] = useState([...data])
  
  const handleAdd = () => {
    const newData: DataType = {
      key: Math.random() * 10 + 1,
      productName: [
        "https://images.javatpoint.com/sqlpages/images/database2.jpg",
        "new row",
      ],
      price: 21,
      stock: 12,
      category: "Electric",
      tags: ["Out of Stock"],
    };
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