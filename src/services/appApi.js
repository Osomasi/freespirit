//this is the appApi, it will be used to make api calls to the backend.
// the base url is the url of the backend, and the endpoints are the api endpoints.
// on the server, the route handler for signup is app.post('/users/signup', signup);

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: ({ ...rest }) => ({ 
                url: `post/signup`,
                method: 'POST',
                body: rest,
              }),
                    }),

        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),
    }),
});

export const {useSignupMutation, useLoginMutation} = appApi;
