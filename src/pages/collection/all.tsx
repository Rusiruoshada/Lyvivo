import React from 'react'
import Path from '../../components/Breadcrumb/Breadcrumb.tsx';
import Filter from '../../components/ProductArea/AllProduct/FilterSection/Filter.tsx';

function AllProduct() {
  return (
    <>
      <Path />
      <div>
        <Filter count={[30,15,3,200,3]} />
      </div>
    </>
  )
}

export default AllProduct;