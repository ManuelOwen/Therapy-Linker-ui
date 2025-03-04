import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface Doctor {
    id: number;
    name: string;
    department_id: string;
    image_url: string;
    description: string;
    position: string;
}
export const  doctorsApi = createApi({
    // fetch doctors from database
    reducerPath: "doctorsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api/"}),
    endpoints:(builder)=>({
        getDoctors:builder.query({
            query:()=>`doctor`,
        })
    })
});