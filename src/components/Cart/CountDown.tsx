import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { cartProductAction } from '../../store/slices/cartProductSlice.ts';

interface CountDownProps {
    count: number;
    size?: number;
    productName:string;
    price: number;
    id: string;
}

const CountDown: React.FC<CountDownProps> = ({ count:productCount,size,productName,price:savingPrice,id}) => {

    const dispatch = useDispatch();
    const [count, setCount] = useState(productCount);
    const [clickAdd, setClickAdd] = useState({
      click: false,
      text: 'Add to Cart',
    });
  
    const checkIFProductAddToCart = useSelector(
      (state: any) => state.cartShow.cartProducts
    );
  
    const checkWhatsWrong = useSelector(// delete this when done
      (state: any) => state.cartShow
    );
    

    const add = () => {
        setCount((prevCount) => size? prevCount: prevCount + 1);
        dispatch(
          cartProductAction.totalPrice({
            cartProductCount: size? 0:1,
            totalPriceForProduct: savingPrice + savingPrice * count,
          })
        );
    };
    
      const minus = () => {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            return 1;
          } else {
            return prevCount - 1;
          }
        });
        if (count <= 1) {
          if (checkIFProductAddToCart.length !== 0) {
            const filterAndRemoveProduct = checkIFProductAddToCart.filter(
                (productId: any) => productId !== id
              );
      
              dispatch(
                cartProductAction.totalPrice({
                  cartProductCount: 0, // how many add to cart in one product
                  totalPriceForProduct: savingPrice,
                })
              );
              dispatch(
                cartProductAction.addProduct({
                  cartProducts: filterAndRemoveProduct,
                  productCount: -1, // how many products in cart
                })
              );
              dispatch(
                cartProductAction.removeItems({
                  removingProductId:id
                })
              )
            // setClickAdd({ click: false, text: `Remove ${productName} from Cart` });
    
            // openNotification({type:'success', description:`${productName} remove from cart`, message:'Successful',role:'status', className:'[&<div]:!top-10'});
    
          } else {
            // openNotification({type:'error', description:`${productName} not in cart to remove it.`, message:'Error',role:'alert'});
          }
        } else {
        //   dispatch(
        //     cartProductAction.totalPrice({
        //       cartProductCount: -1,
        //       totalPriceForProduct: savingPrice * count - savingPrice,
        //     })
        //   );
        //   setClickAdd({ click: false, text: `Remove one ${productName} in Cart` });
        }
      };

  return (
    <div className='flex flex-col gap-1 items-center justify-center'>
      <div className='rounded-md shadow-md aspect-square p-1 hover:scale-90' onClick={add}>
        <FaPlus className='' />
      </div>
      <p className='!text-gray-500'>{count}</p>
      <div className='rounded-md shadow-md aspect-square p-1 hover:scale-90' onClick={minus}>
        <FaMinus className='' />
      </div>
    </div>
  );
};

export default CountDown;
