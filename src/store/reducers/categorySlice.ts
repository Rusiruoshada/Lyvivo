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
        
    }
})