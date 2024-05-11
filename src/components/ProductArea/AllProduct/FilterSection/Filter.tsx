import React from 'react'
import filters from './filterContent.ts'
import { Button } from 'antd'

interface FilterProps{
  count: number[]
}

const Filter:React.FC<FilterProps> = ({count}) => {


  return (
    <section className='border border-gray-300'>
      <section>
        <h4>Lyvivo Specials</h4>
        {filters.specials.map((special,index) => (
          <Button type='link' className='flex flex-cols'>{special} {count[index]}</Button>
        ))}
      </section>
    </section>
  )
}

export default Filter