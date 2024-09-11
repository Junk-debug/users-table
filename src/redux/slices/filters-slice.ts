import { User } from "@/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filters = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

const initialState: Filters = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        key: keyof Filters;
        value: Filters[keyof Filters];
      }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    resetFilters: () => {
      return { ...initialState };
    },
  },
  selectors: {
    selectFilters: (state) => state,
  },
});

export const filterUsers = (users: User[], filters: Filters) =>
  users.filter((user) => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
    );
  });

export const { setFilter, resetFilters } = filtersSlice.actions;
export const { selectFilters } = filtersSlice.selectors;
export default filtersSlice.reducer;
