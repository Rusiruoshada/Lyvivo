import { addProductAction } from "../actionTypes/cartActionTypes";

export const addProduct:any =(state:any, action:addProductAction) => {
    const currentProductCount = action.payload;

    state.cartProducts.push(currentProductCount.cartProducts)

    state.productCount += currentProductCount.productCount ;
}