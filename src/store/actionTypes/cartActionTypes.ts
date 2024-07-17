export interface CartProductsInitialState {
  cartProducts?: { id: string }[];
  productCount?: number;
  cartProductCount?: number;
  totalPriceForProduct?: number;
  cartProductDetails?: {
    id: string;
    productName: string;
    image: string;
    addItems: number;
    price: number;
  }[];
}

export interface addProductAction {
  type: string;
  payload: CartProductsInitialState;
}

export type CartActionTypes = CartProductsInitialState | addProductAction;
