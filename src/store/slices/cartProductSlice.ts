import { createSlice } from "@reduxjs/toolkit";
import { addProduct, totalPrice } from "../actions/cartProductActions.ts";
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
        addProduct : addProduct,
        totalPrice : totalPrice,
    }
});

export const cartProductAction = cartProductSlice.actions;

export default cartProductSlice.reducer;