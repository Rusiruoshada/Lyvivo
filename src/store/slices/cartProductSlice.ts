import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../actions/cartProductActions.ts";
import { cartProductCount } from "../actions/cartProductActions.ts";
import { CartProductsInitialState } from "../actionTypes/cartActionTypes.ts";



const cartProductsInitialState:CartProductsInitialState = {
    cartProducts: [],
    productCount: 0,
    cartProductCount: 1
}

const cartProductSlice = createSlice({
    name:'cartProduct',
    initialState: cartProductsInitialState,
    reducers: {
        addProduct : addProduct,
        cartProductCount:cartProductCount,
    }
});

export const cartProductAction = cartProductSlice.actions;

export default cartProductSlice.reducer;