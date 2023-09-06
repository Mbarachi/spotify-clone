import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "c1b334740fmsh0535a175fc2226cp1e0decjsnc335c7cef274"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({query : ({songid}) => `/songs/v2/get-details?id=${songid}` }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery } = shazamCoreApi;
