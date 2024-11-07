import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name:'favourite',
    initialState:{
        data:[]
    },
    reducers:{
        addFavourite(state,action){
            state.data.push(action.payload);
        },
        removeFavourite(state, action){
            state.data = state.data.filter((item) =>{
                return item.idMeal !== action.payload.idMeal 
            });
        }
    }
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export const favouriteReducer = favouriteSlice.reducer;