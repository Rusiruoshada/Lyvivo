import React, { ReactNode } from 'react'

interface CardProps{
    children: ReactNode;
    className?: string;
}

const Card:React.FC<CardProps>= ({children, className}) => {
  return (
    <div className={`p-3 shadow-md rounded-md flex my-1 ${className}`}>
         {children} 
    </div>
  )
}

export default Card