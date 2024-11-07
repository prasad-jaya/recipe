import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "../api/recipeApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { favouriteReducer } from "./slice/favouriteSlice";

export const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer,
        favourite: favouriteReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(recipeApi.middleware)
    }
})

setupListeners(store.dispatch);