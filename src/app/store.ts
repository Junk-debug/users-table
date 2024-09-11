import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiSlice from "@/api/api";
import filtersReducer from "@/redux/slices/filters-slice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  filters: filtersReducer,
});

export const setupStore = (
  preloadedState?: Partial<ReturnType<typeof rootReducer>>
) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

const store = setupStore();

export default store;
