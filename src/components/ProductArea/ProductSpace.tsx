import React from 'react';


interface ProductSpaceProps {
  element: any[];
}

const ProductSpace:React.FC<ProductSpaceProps> = ({element}) => {
  return (
    <div>
      {element.map((productCarousel) => (
        productCarousel
      ))}
    </div>
  );
};

export default ProductSpace;
