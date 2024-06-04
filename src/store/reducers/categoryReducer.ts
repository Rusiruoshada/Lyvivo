import { CategoryActionTypes } from '../actionTypes/categoryActionTypes.ts';
import { ICategoryList } from '../../types/shoppingAreaTypes.ts';



const CategoryInitState: ICategoryList = {
  category: { id: 1, title: 'All' },
  allCategories: [],
};

// export const categoryReducer: any = (
//   state: ICategoryList = CategoryInitState,
//   action: CategoryActionTypes
// ) => {
//   switch (action.type) {
//     case ACTIONS.CHANGE_CATEGORY: {
//       const newCategory = action.payload;
//       return {
//         ...state,
//         category: newCategory,
//       };
//     }
//     case ACTIONS.GET_ALL_CATEGORY: {
//       return {
//         ...state,
//         allCategories: action.payload,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
