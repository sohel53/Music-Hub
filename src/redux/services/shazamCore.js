import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '247df4ef7cmsha0b2b69b906d946p1e719ejsnaa24c7e48c4c',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '247df4ef7cmsha0b2b69b906d946p1e719ejsnaa24c7e48c4c');

            return headers; 
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'charts/track' })
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;