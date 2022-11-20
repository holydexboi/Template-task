import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { templateApi } from "../services/template";

export const store = configureStore({
  reducer: {
    [templateApi.reducerPath]: templateApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(templateApi.middleware),
});

setupListeners(store.dispatch);
