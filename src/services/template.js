import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const templateApi = createApi({
  reducerPath: "templateApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getTemplates: builder.query({
      query: () => `public/task_templates`,
    }),
  }),
});

export const { useGetTemplatesQuery } = templateApi;