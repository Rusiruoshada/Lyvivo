import { Button,InputRef,Table, TableColumnType } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { IoAddCircleOutline, IoSearch, IoSearchOutline } from 'react-icons/io5';
import { DataType } from '../../../types/productItemListTypes.ts';
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { Input, Popconfirm, Space } from "antd";
import { ColumnsType } from "antd/es/table/InternalTable";
import { FilterDropdownProps } from "antd/es/table/interface";
import columnData from './productItemsSchema.tsx';
import AddNewProduct from '../AddNewProduct/AddNewProduct.tsx';

const ProductList = () => {
  const [dataSource, setDataSource] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const searchInput = useRef<InputRef>(null);
  const [openNewProduct, setOpenNewProduct] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/getAllProductData`
      );
      const data = response.data;

      const formattedData = data.map((dataItems: any, i:number) => {
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
  
  const {category,edit,price,productName,status,stock,delete: deleteData} = columnData

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
      key: productName.key,
      title: productName.title,
      dataIndex: productName.dataIndex,
      filterSearch: productName.filterSearch,
      width: productName.width,
      render: productName.render,
      ...getColumnSearchProps("productName"),
    },
    {
      key: category.key,
      title: category.title,
      dataIndex: category.dataIndex,
      filters: category.filters,
      onFilter: category.onFilter,
      width: category.width,
    },
    {
      key: price.key,
      title: price.title,
      dataIndex: price.dataIndex,
      sorter: price.sorter,
      width: price.width,
    },
    {
      key: stock.key,
      title: stock.title,
      dataIndex: stock.dataIndex,
      width: stock.width,
      align: stock.align, 
    },
    {
      title: status.title,
      key: status.key,
      dataIndex: status.dataIndex,
      width: status.width,
      render: status.render,
      align: status.align,
      filters: status.filters,
      onFilter:status.onFilter,
    },
    {
      key: edit.key,
      dataIndex: edit.dataIndex,
      render: edit.render,
      colSpan: edit.colSpan,
      align: edit.align,
      width:edit.width,
    },
    {
      key: deleteData.key,
      dataIndex: deleteData.dataIndex,
      colSpan: deleteData.colSpan,
      align: deleteData.align,
      width: deleteData.width,
      render: (_, record) => {
            return (
              <Popconfirm
                title="Confirm deleting"
                okType="danger"
                showCancel={false}
                  onConfirm={() => handleDelete(record.key)}
              >
                <button className="hover:!scale-110 hover:text-red-500">
                  <MdDeleteOutline className="text-[18px] shadow-sm" />
                </button>
              </Popconfirm>
            );
          },
    },
  ];
  

    const handleDelete = (key: string|undefined) => {
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
    setDataSource([...dataSource, newData])
    setOpenNewProduct(!openNewProduct)
  }

  return (
    <div className="p-4">
      <div className='flex justify-end'>
        {openNewProduct && <AddNewProduct /> }
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