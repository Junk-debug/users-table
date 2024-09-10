import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UsersResponse } from "./types";

const baseUrl = "https://jsonplaceholder.typicode.com";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, void>({
      query: () => {
        return "/users";
      },
    }),

    getUserById: builder.query<User, User["id"]>({
      query: (id) => {
        return `/users/${id}`;
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = apiSlice;
export default apiSlice;
