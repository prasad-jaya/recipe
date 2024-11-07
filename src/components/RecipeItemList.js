import { useContext, useEffect, useState } from "react";
import RecipeContext from "../context/recipeContext";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/slice/favouriteSlice";

const RecipeItemList = ({recipe}) =>{
    //CONTEXT
    const { toggleFavourite, favourite } = useContext(RecipeContext);
    const dispatch = useDispatch();

    const favouriteItem = useSelector((state) => {
        return state.favourite;
    });
    const toggleFavourite2 = (recipe) =>{
        (favouriteItem.data.some((fav) =>fav.idMeal === recipe.idMeal))
        ? dispatch(removeFavourite(recipe)) 
        : dispatch(addFavourite(recipe));
    }

    let renderRecipe;
    if(Array.isArray(recipe) && recipe.length !== 0){
        renderRecipe = recipe.map((recipe)=>{
            
             let selectedHeart = favouriteItem.data.some((fav) =>fav.idMeal === recipe.idMeal);
            return  (
                <div key={recipe.idMeal} >
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-[28px]"/>
                    <div className="flex justify-between place-items-baseline">
                        <p className="py-4 font-bold text-sm w-[20ch]">{recipe.strMeal}</p><FaHeart className={`hover:text-red-600 text-md cursor-pointer ${selectedHeart ? "text-red-600" : "text-gray-200"}`} onClick={() => toggleFavourite2(recipe)} />
                    </div>
                </div>
            )
        })
    }
    return renderRecipe;
}

export default RecipeItemList;