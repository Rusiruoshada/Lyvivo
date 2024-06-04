import { createSlice } from "@reduxjs/toolkit";
import { ICategoryList } from "../../types/shoppingAreaTypes";

const categoryInitState: ICategoryList = {
    category: { id: 1, title: 'All' },
    allCategories: [],
  };

const categorySelectSlice = createSlice({
    name:'homepageCategorySelect',
    initialState:categoryInitState,
    reducers: {
        changeCategory(state,action){
            const newCategory = action.payload;
            return {
                ...state,
                category: newCategory,
            };
        },
        getAllCategories(state,action){
            return {
                ...state,
                allCategories: action.payload,
            };
        }
    }
})

export const {changeCategory, getAllCategories} = categorySelectSlice.actions;

export default categorySelectSlice.reducer;