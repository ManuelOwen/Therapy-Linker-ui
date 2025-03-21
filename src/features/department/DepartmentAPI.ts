import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface departments {
    id: number;
    department_name: string;
    department: string;
    image_url: string;
    description: string;
    icon: string;
}
export const  departmentsApi = createApi({
    // fetch doctors from database
    reducerPath: "deprtmentsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api/"}),
    endpoints:(builder)=>({
        getDepartments:builder.query({
            query:()=>`department`,
        })
    })
});