import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface CountDownProps {
  count: number;
}

const CountDown: React.FC<CountDownProps> = ({ count }) => {

    

  return (
    <div className='flex flex-col gap-1 items-center justify-center'>
      <div className='rounded-md shadow-md aspect-square p-1 hover:scale-90'>
        <FaPlus className='' />
      </div>
      <p className='!text-gray-500'>{count}</p>
      <div className='rounded-md shadow-md aspect-square p-1 hover:scale-90'>
        <FaMinus className='' />
      </div>
    </div>
  );
};

export default CountDown;
