import { PayloadAction } from '@reduxjs/toolkit';
import { addProductAction } from '../actionTypes/cartActionTypes';


export const addProduct:any = (state: any , action: PayloadAction<any>) => {
  const currentProductCount = action.payload;
  if (Array.isArray(currentProductCount.cartProducts)) {
    state.cartProducts = currentProductCount.cartProducts;
  } else {
    state.cartProducts.push(currentProductCount.cartProducts);
  }
  state.productCount += currentProductCount.productCount;
};

const totalPrice: any = (state: any, action: PayloadAction<any>) => {
  const productCount = action.payload;

  state.cartProductCount += productCount.cartProductCount;

  state.totalPriceForProduct = productCount.totalPriceForProduct;
};

const getAllDetails: any = (state: any, action: PayloadAction<any>) => {
  const productDetails = action.payload;

  const checkProductExist = state.cartProductDetails
    .filter(
      (productDetail: any) =>
        productDetail.id === productDetails.cartProductDetails.id
    )
    .some(
      (productDetail: any) =>
        productDetail.id === productDetails.cartProductDetails.id
    );


  if(checkProductExist){
    for(let i =0; i < state.cartProductDetails.length; i++) {
      if(state.cartProductDetails[i].id === productDetails.cartProductDetails.id){
        let updateProductDetails = state.cartProductDetails[i]
        state.cartProductDetails[i] = {
          ...updateProductDetails,
          price: productDetails.cartProductDetails.price,
          addItemsCount:  productDetails.cartProductDetails.addItemsCount,
          size:productDetails.cartProductDetails.size
        }

      }
    }
  }else{
    state.cartProductDetails.push(productDetails.cartProductDetails);
  }
};

export default getAllDetails;
export {totalPrice}