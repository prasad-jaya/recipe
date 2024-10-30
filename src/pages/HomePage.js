import { useContext, useEffect } from "react";
import Header from "../components/Header";
import RecipeContext from "../context/recipeContext";
import RecipeItemList from "../components/RecipeItemList";

const FEATURED_CATEGORY = [
    'Pork',
    'Beef',
    'Lamb',
    'Chicken'
];

const HomePage = () =>{
    const {recipe, fetchRecipeByCategory, fetchRecipe} = useContext(RecipeContext);

    useEffect(()=>{
        fetchRecipe('Pork');
    },[])
 
    const renderRecipeCategory = FEATURED_CATEGORY.map((category) =>{
        return ( 
            <div className="cursor-pointer bg-pink-100 text-pink-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded" key={category} onClick={() =>fetchRecipeByCategory(category)}>{category}</div>
        )
    });

    return (
        <div className="container mx-auto px-20 pt-12">
            <Header/>
            <div className="flex container py-6 gap-3">
                {renderRecipeCategory}
            </div>
            <div className="grid grid-cols-5 gap-16 ">
                <RecipeItemList recipe={recipe}/>
            </div>
        </div>
    )
}
export default HomePage;