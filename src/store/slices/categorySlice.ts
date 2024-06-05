import { createSlice } from '@reduxjs/toolkit';
import { ICategoryList } from '../../types/shoppingAreaTypes.ts';
import {
  changeCategory,
  getAllCategories,
} from '../actions/categoryActions.ts';

const categoryInitState: ICategoryList = {
  category: { id: 1, title: 'All' },
  allCategories: [],
};

const categorySelectSlice = createSlice({
  name: 'homepageCategorySelect',
  initialState: categoryInitState,
  reducers: {
    changeCategory,
    getAllCategories,
  },
});

export const categorySelectAction = categorySelectSlice.actions;

export default categorySelectSlice.reducer;
