export interface CartProductsInitialState {
  cartProducts?: { id: string }[];
  productCount?: number;
  cartProductCount?: number;
  totalPriceForProduct?: number;
  removingProductId?: string,
  cartProductDetails?: {
    title:string;
    id: string;
    productName: string;
    image?: string;
    addItemsCount?: number;
    price: number;
  }[];
}

export interface addProductAction {
  type: string;
  payload: CartProductsInitialState;
}

export type CartActionTypes = CartProductsInitialState | addProductAction;
