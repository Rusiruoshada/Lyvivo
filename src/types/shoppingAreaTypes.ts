export interface ICategory {
    id: number
    title: string
  }

  export interface ICategoryList {
    category: ICategory;
    allCategories: ICategory[];
  }