import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "../api/recipeApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(recipeApi.middleware)
    }
})

setupListeners(store.dispatch);