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
    removingProductId:'',
}

const cartProductSlice = createSlice({
    name:'cartProduct',
    initialState: cartProductsInitialState,
    reducers: {
        addProduct : (state: any , action: PayloadAction<any>) => {
            const currentProductCount = action.payload;
            console.log(currentProductCount)
            if (Array.isArray(currentProductCount.cartProducts)) {
              state.cartProducts = currentProductCount.cartProducts;
            } else {
               const checkSameId = state.cartProducts.filter((productId:string)=> productId===currentProductCount.cartProducts).some((productId: any) => productId === currentProductCount.cartProducts);

               if(!checkSameId){
                 state.cartProducts.push(currentProductCount.cartProducts);
                }else {
                 return
               }
                 
            }
            state.productCount += currentProductCount.productCount;
          },

        totalPrice : (state: any, action: PayloadAction<any>) => {
            const productCount = action.payload;
            if(state.cartProductCount === 0){
              return
            }else{
              state.cartProductCount += productCount.cartProductCount;
            }    
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

        removeItems: (state:any, action: PayloadAction<any>) => {
          const actionData = action.payload;

          const removeFilterProduct = state.cartProductDetails.filter((productId:any)=> productId.id !== actionData.removingProductId )

          console.log(removeFilterProduct)

          state.cartProductDetails = removeFilterProduct

        }
    }
});

export const cartProductAction = cartProductSlice.actions;

export default cartProductSlice.reducer;