export interface CartProductsInitialState {
    cartProducts: {id:string}[],
    productCount: number
}

export interface addProductAction {
    type: string,
    payload: CartProductsInitialState
}

export type CartActionTypes = CartProductsInitialState | addProductAction;