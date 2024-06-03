import * as ACTIONS from '../actionConstants/categoryActions'
import { ICategoryList } from '../../types/shoppingAreaTypes' 

export interface ChangeCategory {
    type: typeof ACTIONS.CHANGE_CATEGORY
    payload: ICategoryList
}

export interface GetAllCategoriesActionType {
    type: typeof ACTIONS.GET_ALL_CATEGORY
    payload: ICategoryList[]
}

export type CategoryActionTypes = ChangeCategory | GetAllCategoriesActionType;