import axios from "axios";
import { createContext, useState } from "react";

const RecipeContext = createContext();

const RecipeContextProvider = ({children}) =>{
    const [ recipe, setRecipe ] = useState([]);
    const [ favourite, setFavourite ] = useState([]);

    const fetchRecipe  = async (data) => {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data}`);
            setRecipe(res.data.meals);
    }

    const fetchRecipeByCategory = async (recipeCategory) =>{
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipeCategory}`);
        setRecipe(res.data.meals);
    }

    const toggleFavourite = (favItem) =>{
        favourite.some((fav) =>fav.idMeal === favItem.idMeal)
        ? setFavourite(favourite.filter((fav) => fav.idMeal !== favItem.idMeal)) 
        : setFavourite([...favourite, favItem]); 
    }

    return <RecipeContext.Provider value={{recipe, favourite, fetchRecipe, fetchRecipeByCategory, toggleFavourite }}>
        {children}
    </RecipeContext.Provider>
};

export { RecipeContextProvider };
export default RecipeContext;