export const addProduct:any =(state:any, action:any) => {
    const currentProductCount = action.payload;
    state.productCount += currentProductCount ;
}