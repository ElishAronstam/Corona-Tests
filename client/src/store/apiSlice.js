import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => "/patients",
      providesTags: ["refresh"],
    }),
    addPatient: builder.mutation({
      query: (patient) => ({
        url: "/patients",
        method: "POST",
        body: patient,
      }),
      invalidatesTags: ["refresh"],
    }),
    editPatient: builder.mutation({
      query: (patient) => ({
        url: "/patients",
        method: "PUT",
        body: patient,
      }),
      invalidatesTags: ["refresh"],
    }),
    deletePatient: builder.mutation({
      query: (id) => ({
        url: "/patients",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["refresh"],
    }),
  }),
});

export const {
  useAddPatientMutation,
  useDeletePatientMutation,
  useGetPatientsQuery,
  useEditPatientMutation,
} = apiSlice;
