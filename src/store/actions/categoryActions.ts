import {ChangeCategory, GetAllCategoriesActionType } from "../actionTypes/categoryActionTypes";
import * as ACTIONS from '../actionConstants/categoryActions.ts'
import { ICategory } from "../../types/shoppingAreaTypes";

export const changeCategory:any = (category:ICategory) => {
    return{
        type: ACTIONS.CHANGE_CATEGORY,
        payload: category
    }
}

export const getAllCategories:any = (categories: ICategory[]) => {
    return {
      type: ACTIONS.GET_ALL_CATEGORY,
      payload: categories
    }
  }
