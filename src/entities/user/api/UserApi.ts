import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../model';
import { Find, PaginationResponseData } from '@/shared';

const REDUCER_PATH = 'UserApi';

export const UserApi = createApi({
    reducerPath: REDUCER_PATH,
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
    endpoints: (builder) => ({
        findUsers: builder.mutation<PaginationResponseData<User>, Find>({
            query: ({ page, limit }) => {
                const urlQueries = new URLSearchParams({
                    page: page.toString(),
                    limit: limit.toString(),
                    skip: ((page - 1) * limit).toString(),
                }).toString();

                return {
                    url: `users?${urlQueries}`,
                    method: 'GET',
                };
            },
        }),
    }),
});

export const { useFindUsersMutation } = UserApi;
