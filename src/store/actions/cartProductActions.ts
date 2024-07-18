import { PayloadAction } from '@reduxjs/toolkit';
import { addProductAction } from '../actionTypes/cartActionTypes';

export const addProduct: any = (state: any, action: PayloadAction<any>) => {
  const currentProductCount = action.payload;
  if (Array.isArray(currentProductCount.cartProducts)) {
    state.cartProducts = currentProductCount.cartProducts;
  } else {
    state.cartProducts.push(currentProductCount.cartProducts);
  }
  state.productCount += currentProductCount.productCount;
};

export const totalPrice: any = (state: any, action: PayloadAction<any>) => {
  const productCount = action.payload;

  state.cartProductCount += productCount.cartProductCount;

  state.totalPriceForProduct = productCount.totalPriceForProduct;
};

export const getAllDetails: any = (state: any, action: PayloadAction<any>) => {
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

  console.log('check if id exist ' + checkProductExist);
  console.log('action load ' + productDetails.cartProductDetails.id);
  console.log('initial state ' + state.cartProductDetails[0]?.id);

  state.cartProductDetails.push(productDetails.cartProductDetails);
};
