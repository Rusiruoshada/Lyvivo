import React from 'react'

interface CartProductCardProps {
    key:string,
    productName:string,
    price:number,
    count:number,
    image:string,
    size:number,
    id:string,
    removeProductFC: any
}

const  CartProductCard:React.FC<CartProductCardProps> = ({key,
    productName,
    price,
    count,
    image,
    size,
    id,
    removeProductFC}) => {
  return (
    <div> 
        
    </div>
  )
}

export default  CartProductCard;