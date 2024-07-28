import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../actions/cartProductActions.ts";
import  getAllDetails from "../actions/cartProductActions.ts";
import  {totalPrice} from "../actions/cartProductActions.ts";
import { CartProductsInitialState } from "../actionTypes/cartActionTypes.ts";



const cartProductsInitialState:CartProductsInitialState = {
    cartProducts: [],
    productCount: 0,
    cartProductCount: 1,
    totalPriceForProduct: 0,
    cartProductDetails: [],
}

const cartProductSlice = createSlice({
    name:'cartProduct',
    initialState: cartProductsInitialState,
    reducers: {
        addProduct : (state: any , action: PayloadAction<any>) => {
            const currentProductCount = action.payload;

            if (Array.isArray(currentProductCount.cartProducts)) {
              state.cartProducts = currentProductCount.cartProducts;
            } else {
              console.log('pushing addProduct ids')
              console.log(state.cartProducts)
              state.cartProducts.push(currentProductCount.cartProducts);
            }
            state.productCount += currentProductCount.productCount;
          },

        totalPrice : (state: any, action: PayloadAction<any>) => {
            const productCount = action.payload;
            state.cartProductCount += productCount.cartProductCount;
            console.log(state)
          
            state.totalPriceForProduct = productCount.totalPriceForProduct;
          },
          
        getAllDetails: (state: any, action: PayloadAction<any>) => {
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
          },
    }
});

export const cartProductAction = cartProductSlice.actions;

export default cartProductSlice.reducer;