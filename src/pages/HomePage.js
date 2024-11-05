import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import RecipeContext from "../context/recipeContext";
import RecipeItemList from "../components/RecipeItemList";
import { useFetchRecipeQuery } from "../api/recipeApi";

const FEATURED_CATEGORY = [
    'Pork',
    'Beef',
    'Lamb',
    'Chicken'
];

const HomePage = () =>{
    const {recipe, fetchRecipeByCategory, fetchRecipe} = useContext(RecipeContext);

    const [active, setActive] = useState('Pork');
    const {data, error, isLoading} = useFetchRecipeQuery(active);
    console.log(data);
    useEffect(()=>{
        //fetchRecipe('Pork');
    },[])

    const handleClick = (category) =>{
        setActive(category);
    }
 
    const renderRecipeCategory = FEATURED_CATEGORY.map((category) =>{    
        return ( 
            <div className={`cursor-pointer border-solid border-2 border-pink-800 ${active === category ? 'bg-pink-800 text-white' : 'bg-white text-pink-800'}   text-xl font-medium me-2 px-6 py-3 rounded-2xl hover:bg-pink-800 hover:text-white`} key={category} 
            onClick={() => handleClick(category)}>{category}</div>
        )
    });
    let recipeList = isLoading || <RecipeItemList recipe={data.meals}/>
    return (
        <>
            <div className="flex container pb-2 gap-3">
                {renderRecipeCategory}
            </div>
            <div className="grid grid-cols-5 gap-16 py-5 ">
                {recipeList}
            </div> 
        </>
    )
}
export default HomePage;