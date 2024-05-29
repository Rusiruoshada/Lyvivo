import * as ACTIONS from '../actionConstants/categroyActions.ts';
export interface CategorySelect {
  category: { id: number; title: string };
  allCategories: any;
}

const CategoryInitState: CategorySelect = {
  category: { id: 1, title: 'All' },
  allCategories: [],
};

export const categoryReducer: CategorySelect = (
  state: CategorySelect = CategoryInitState,
  action: any
) => {
  switch (action.type) {
    case ACTIONS.CHANGE_CATEGORY: {
      const newCategory = action.payload;
      return {
        ...state,
        category: newCategory,
      };
    }
    case ACTIONS.GET_ALL_CATEGORY: {
      console.log(action);
      return {
        ...state,
        allCategories: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
