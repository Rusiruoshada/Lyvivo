import React from 'react';


interface ProductSpaceProps {
  element: any[];
}

const ProductSpace:React.FC<ProductSpaceProps> = ({element}) => {
  return (
    <div>
      {element.map((productCarousel,index) => (
        <div key={index}>{productCarousel}</div>
      ))}
    </div>
  );
};

export default ProductSpace;
