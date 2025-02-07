import { Button, Table } from 'antd'
import React from 'react'
import { columns, data } from './TableData.tsx'
import { IoPrintOutline } from 'react-icons/io5'

const TopSellingProducts = () => {

  const scroll: { x?: number | string; y?: number | string } = {};

  return (
    <div>
      <div className='flex flex-row justify-between mb-3'>
        <span className='text-[18px] font-semibold'>Top Selling Products</span>
        <span><Button onClick={()=> {console.log("Printing...")}} className='flex items-center text-[var(--adminPrimaryColor)]' icon={<IoPrintOutline />}>Get Copy</Button></span>
      </div>
      <div>
        <Table columns={columns} dataSource={data} pagination={false} scroll={scroll} />
      </div>
    </div>
  )
}

export default TopSellingProducts