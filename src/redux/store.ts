import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";

// Créez le store avec configureStore
const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    // Ajoutez d'autres slices de reducer ici
  },
  // Configurez le middleware, y compris apiSlice.middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
