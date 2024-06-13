import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../actions/cartProductActions.ts";

interface CartProductsInitialState {
    cartProducts: {id:string}[],
    productCount: number
}

const cartProductsInitialState:CartProductsInitialState = {
    cartProducts: [],
    productCount: 0,
}

const cartProductSlice = createSlice({
    name:'cartProduct',
    initialState: cartProductsInitialState,
    reducers: {
        // addProducts : addProduct,
        addProduct(state:any, action:any):any  {
            const currentProductCount = action.payload;
            state.productCount += currentProductCount ;
        }

    }
});

export const cartProduct = cartProductSlice.actions;

export default cartProductSlice.reducer;