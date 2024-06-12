import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../actions/cartProductActions.ts";

const cartProductsInitialState = {
    cartProducts: [],
    productCount: 0,
}

const cartProductSlice = createSlice({
    name:'cartProduct',
    initialState: cartProductsInitialState,
    reducers: {
        addProduct : addProduct,

    }
});

export const cartProduct = cartProductSlice.actions;

export default cartProductSlice.reducer;