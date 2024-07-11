export interface CartProductsInitialState {
    cartProducts: {id:string}[],
    productCount: number,
    cartProductCount: number,
}

export interface addProductAction {
    type: string,
    payload: CartProductsInitialState
}

export type CartActionTypes = CartProductsInitialState | addProductAction;