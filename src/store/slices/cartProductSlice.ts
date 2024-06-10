import { createSlice } from "@reduxjs/toolkit";

const cartProductsInitialState = {
    cartProducts: [],
}

const cartProductSlice = createSlice({
    name:'cartProduct',
    initialState: cartProductsInitialState,
    reducers: {
        
    }
});

export const cartProduct = cartProductSlice.actions;

export default cartProductSlice.reducer;