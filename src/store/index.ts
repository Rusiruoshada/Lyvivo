import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slices/categorySlice.ts';
import cartProductSlice from './slices/cartProductSlice.ts';

const store = configureStore({
  reducer: {
    homepageCategory: categorySlice,
    cartShow: cartProductSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
