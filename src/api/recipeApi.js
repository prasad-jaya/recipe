import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const recipeApi = createApi({
    reducerPath:'recipe',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://www.themealdb.com/api/json/v1/1/'
    }),
    endpoints(builder) {
        return {
            fetchRecipe: builder.query({
                query(recipe) {
                    return {
                        url:'filter.php?',
                        params:{
                            c:recipe
                        },
                        method:'GET'
                    }
                }
            })
        }
    }
})

export const { useFetchRecipeQuery } = recipeApi;
export {recipeApi};