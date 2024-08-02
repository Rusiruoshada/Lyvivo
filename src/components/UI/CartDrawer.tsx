import React from 'react';
import type { DrawerProps } from 'antd';
import { Button, Drawer } from 'antd';
import CartProductCard from './CartProductCard.tsx';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { cartProductAction } from '../../store/slices/cartProductSlice.ts';

interface CartDrawerProps {
  openCart: boolean;
  onOpenCart: any;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ openCart, onOpenCart }) => {

  const dispatch = useDispatch()

  const checkIFProductAddToCart = useSelector(
    (state: any) => state.cartShow.cartProductDetails
  );
  const checkIFProductIdExist = useSelector(
    (state: any) => state.cartShow.cartProducts
  );

  console.log(checkIFProductAddToCart)

  let filterAndRemoveProductId:string[] ;
  
  const removeProductFC =(id:string) => {
    
    dispatch(cartProductAction.removeItems({
      removingProductId:id,
    }))

    filterAndRemoveProductId = checkIFProductIdExist
      .filter((productId: any) => productId !== id)
      
    dispatch(
        cartProductAction.addProduct({
          cartProducts: filterAndRemoveProductId,
          productCount: -1,
        })
    );
        
  }


  return (
    <div className='z-[102]'>
      <Drawer
        title='Keep Shopping'
        placement={'right'}
        closable={true}
        onClose={onOpenCart}
        open={openCart}
        key={'right'}
        className='p-0 [&>div]:!p-2'
        closeIcon={<IoIosArrowBack />}
      >
        <div className='!p-0 mb-36'>
        {checkIFProductAddToCart?.map((productDetails: any) => (
          <CartProductCard
            key={productDetails.id}
            productName={productDetails.productName}
            price={productDetails.price}
            count={productDetails.addItemsCount}
            image={productDetails.image}
            id={productDetails.id}
            removeProductFC={removeProductFC}
          />
        ))}
        </div>
        <div className='h-[140px] absolute bottom-0 right-0 left-0 top-auto bg-white !p-2 shadow-lg rounded-tl-3xl rounded-tr-3xl'>
          
          <div className='flex justify-between mt-3 mb-0'>
              <span><h5>Total Price : </h5></span>
              <span><h4>Rs. 1000.99</h4></span>
          </div>
          <div className='flex justify-between mt-0 mb-2 text-gray-500'>
              <span><h6>Items : </h6></span>
              <span><h6>{checkIFProductAddToCart?.length}</h6></span>
          </div>
          <Button type='primary' className='bg-black w-full' onClick={()=>{alert('click check out')}}>Check Out</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
