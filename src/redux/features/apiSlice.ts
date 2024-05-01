import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useNavigate } from "react-router-dom";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        const baseQuery = fetchBaseQuery({
            baseUrl: import.meta.env.SERVER_URL,
            prepareHeaders: (headers) => {
                const token = localStorage.getItem("authToken");
                if (token) {
                    headers.set("Authorization", `Bearer ${token}`);
                }
                return headers;
            },
        });

        const response = await baseQuery(args, api, extraOptions);
        if (response.error && (response.error.status === 401 || response.error.status === 403)) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            const navigate = useNavigate();
            navigate("/login", { replace: true });
        }

        return response;
    },
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userDto: any) => ({
                url: "/posts",
                method: "POST",
                body: userDto,
            }),
        }),
    }),
});


export const {
    useLoginMutation
} = apiSlice;
