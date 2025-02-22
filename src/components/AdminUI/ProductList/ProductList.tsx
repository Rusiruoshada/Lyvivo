import { Button,InputRef,Table, TableColumnType } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { IoAddCircleOutline, IoSearch, IoSearchOutline } from 'react-icons/io5';
import { DataType, ProductDataType } from '../../../types/productItemListTypes.ts';
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { Image, Input, Popconfirm, Space, Tag } from "antd";
import { TbEdit } from "react-icons/tb";
import { ColumnsType } from "antd/es/table/InternalTable";
import { FilterDropdownProps } from "antd/es/table/interface";

const ProductList = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const searchInput = useRef<InputRef>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/getAllProductData`
      );
      const data = response.data;

      const formattedData = data.map((dataItems: ProductDataType, i:number) => {
        return {
          key: dataItems._id,
          productName: [dataItems.image, dataItems.productName],
          price: Number(dataItems.regularPrice),
          stock: Number(i + 2003),
          category: dataItems.category,
          tags: ["active"],
          description: dataItems?.description,
        };
      });
      setDataSource(formattedData)
      setLoading(false);
    };

    getData();
  
  }, [])

   const handleSearch = (
     confirm: FilterDropdownProps["confirm"],
   ) => {
     confirm();
   };

   const handleReset = (clearFilters: () => void) => {
     clearFilters();
   };

  const getColumnSearchProps = (
    dataIndex:string
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(confirm)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space className='flex justify-end'>
          <Button
            type="primary"
            onClick={() =>
              handleSearch( confirm)
            }
            icon={<IoSearch />}
            size="small"
            style={{ width: 80 }}
            className='flex hover:!bg-[var(--adminPrimaryColorDark)] !place-items-center [&_span]:!mr-1'
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 80 }}
            className='hover:!border-gray-300 hover:!text-gray-600'
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <IoSearchOutline style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
  });
  
  const columns: ColumnsType<DataType> = [
    {
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
      ...getColumnSearchProps('productName')
    },
    {
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
      onFilter: (value, record) => record.tags?.indexOf(value as string) === 0,
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
              onConfirm={() => handleDelete(record.key!)}
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
  
  

    const handleDelete = (key: string) => {
      const newData = dataSource.filter((item:any) => item.key !== key);
      setDataSource(newData)
    };
  
    const tableColumns = columns.map<DataType>((item:any) => ({ ...item }));
  
  const handleAdd = () => {
    const newData = {
      key:'',
      productName: [
        "https://images.javatpoint.com/sqlpages/images/database2.jpg",
        "new row",
      ],
      price: 21,
      stock: 12,
      category: "Electronics",
      tags: ["Out of Stock"],
      description: '',
      
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
        loading={loading}
      />
    </div>
  );
}

export default ProductList;