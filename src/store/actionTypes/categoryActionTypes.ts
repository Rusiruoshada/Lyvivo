import { ICategoryList } from '../../types/shoppingAreaTypes' 

export interface ChangeCategory {
    type: string
    payload: ICategoryList
}

export interface GetAllCategoriesActionType {
    type:string
    payload: ICategoryList[]
}

export type CategoryActionTypes = ChangeCategory | GetAllCategoriesActionType;