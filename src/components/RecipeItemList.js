import { useContext, useEffect } from "react";
import RecipeContext from "../context/recipeContext";
import { FaHeart } from "react-icons/fa";

const RecipeItemList = ({recipe}) =>{
    const { toggleFavourite, favourite } = useContext(RecipeContext);

    let renderRecipe;
    if(Array.isArray(recipe) && recipe.length !== 0){
        renderRecipe = recipe.map((recipe)=>{
            let selectedHeart = favourite.some((fav) =>fav.idMeal === recipe.idMeal);
            return  (
                <div key={recipe.idMeal} >
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-[28px]"/>
                    <div className="flex justify-between place-items-baseline">
                        <p className="py-4 font-bold text-sm w-[20ch]">{recipe.strMeal}</p><FaHeart className={`hover:text-red-600 text-md cursor-pointer ${selectedHeart ? "text-red-600" : "text-gray-200"}`} onClick={() => toggleFavourite(recipe)} />
                    </div>
                </div>
            )
        })
    }
   
    return renderRecipe;
}

export default RecipeItemList;