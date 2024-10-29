import { useContext, useEffect } from "react";
import Header from "../components/Header";
import RecipeContext from "../context/recipeContext";

const FEATURED_CATEGORY = [
    'Pork',
    'Beef',
    'Lamb',
    'Chicken'
]

const HomePage = () =>{
    const {recipe, fetchRecipe, fetchRecipeByCategory}  = useContext(RecipeContext);

    useEffect(()=>{
        //fetchRecipe();
    },[])

    const renderRecipeCategory = FEATURED_CATEGORY.map((category) =>{
        return ( 
            <div className="cursor-pointer bg-pink-100 text-pink-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded" key={category} onClick={() =>fetchRecipeByCategory(category)}>{category}</div>
        )
    });
    const renderRecipe = recipe.map((recipe)=>{
        return  (
        <div key={recipe.idMeal} className="flex flex-col justify-between gap-3 border rounded shadow p-4">{recipe.strMeal}</div>
        )
      
    })

    return (
        <div className="container mx-auto px-20 pt-12">
            <Header/>
            <div className="flex container py-6 gap-3">
                {renderRecipeCategory}
            </div>
            <div className="flex ">
            {renderRecipe}
            </div>
        </div>
    )
}
export default HomePage;