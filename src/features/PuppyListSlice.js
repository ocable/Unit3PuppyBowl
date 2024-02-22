import api from "../features/api";

const puppyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "/players",
      transformResponse: (response) => response.data.players,
    }),
  }),
});

export const { useGetPuppiesQuery } = puppyApi;
