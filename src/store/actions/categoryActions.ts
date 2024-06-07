import { ICategoryList } from '../../types/shoppingAreaTypes';

export const changeCategory: any = (state: ICategoryList, action: any) => {
  const newCategory = action.payload;
  state.category = newCategory;
};

export const getAllCategories: any = (state: ICategoryList, action: any) => {
  state.allCategories = action.payload;
};
